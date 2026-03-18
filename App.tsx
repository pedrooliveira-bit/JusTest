import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Ícones Gerais ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M6.66699 0C10.3486 0.000340954 13.333 2.9853 13.333 6.66699C13.333 8.20718 12.8089 9.62424 11.9316 10.7529L16.4229 15.2441C16.7478 15.5696 16.7481 16.0976 16.4229 16.4229C16.0976 16.7481 15.5696 16.7478 15.2441 16.4229L10.7529 11.9316C9.62424 12.8089 8.20719 13.3329 6.66699 13.333C2.98531 13.333 0.00035197 10.3486 0 6.66699C0 2.98509 2.98509 0 6.66699 0ZM6.66699 1.66699C3.90557 1.66699 1.66699 3.90557 1.66699 6.66699C1.66734 9.42812 3.90579 11.667 6.66699 11.667C9.42791 11.6667 11.6666 9.42791 11.667 6.66699C11.667 3.90578 9.42813 1.66733 6.66699 1.66699Z" fill="#5C6F8A"/>
  </svg>
);

const QuoteIcon = ({ color = "white" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
    <path d="M3.33301 0C5.17385 0 6.66682 1.49221 6.66699 3.33301C6.66699 4.88609 5.60451 6.19137 4.16699 6.56152V8.33301C4.16699 8.79325 3.79325 9.16699 3.33301 9.16699C3.00168 9.16689 2.69421 9.02171 2.47754 8.8916C2.23254 8.74448 1.97835 8.54013 1.73438 8.28809C1.24447 7.78194 0.75857 7.04682 0.449219 6.08984C0.166478 5.21511 0 4.23965 0 3.33301C0.000175987 1.49232 1.49233 0.000186938 3.33301 0ZM11.667 0C13.5077 0.000175859 14.9998 1.49232 15 3.33301C15 4.8862 13.9377 6.19148 12.5 6.56152V8.33301C12.5 8.79314 12.1271 9.16682 11.667 9.16699C11.3355 9.16699 11.0273 9.02175 10.8105 8.8916C10.5657 8.74453 10.3122 8.53997 10.0684 8.28809C9.57839 7.78192 9.09161 7.04696 8.78223 6.08984C8.49949 5.21511 8.33301 4.23965 8.33301 3.33301C8.33318 1.49222 9.82616 1.10807e-05 11.667 0Z" fill={color}/>
  </svg>
);

const JurisprudenciaIcon = ({ color = "#007A5F" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
    <path d="M13.4075 0C13.7901 0 14.1566 0.160508 14.4124 0.455078L14.4212 0.463867L14.429 0.470703L14.4359 0.479492C14.6896 0.782085 14.7983 1.17518 14.7298 1.56738L14.7288 1.56836L12.2279 15.7822L12.2269 15.7881C12.0873 16.4757 11.4556 16.833 10.9378 16.833H4.46028C4.30427 16.8329 4.1489 16.8063 4.07063 16.7803C3.72428 16.6882 3.44323 16.463 3.27766 16.1611L3.27473 16.1582L0.159495 10.2695H0.160472C-0.0631742 9.8579 -0.0533225 9.35829 0.191722 8.95605C0.435654 8.55601 0.866701 8.30972 1.33723 8.30957H4.35383L5.61653 1.10645L5.6175 1.10449C5.73448 0.472176 6.28104 0.000136323 6.93098 0H13.4075ZM4.36164 16.5791L4.46028 16.583C4.40529 16.583 4.35157 16.577 4.30403 16.5713C4.32235 16.5735 4.34178 16.5775 4.36164 16.5791ZM4.83723 15.1777H10.3782L7.62434 9.97266H5.75422L4.83723 15.1777ZM3.51887 13.0801L4.0677 9.96484H1.87239L3.51887 13.0801ZM6.04719 8.31738H7.82258C8.25326 8.31738 8.6513 8.52848 8.90071 8.86816L8.99836 9.02148L8.99934 9.02441L11.056 12.9062L13.0306 1.66309H7.21125L6.04719 8.31738Z" fill={color} />
  </svg>
);

const JusIABtnIcon = ({ color = "white" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
    <path d="M13.4075 0C13.7901 0 14.1566 0.160508 14.4124 0.455078L14.4212 0.463867L14.429 0.470703L14.4359 0.479492C14.6896 0.782085 14.7983 1.17518 14.7298 1.56738L14.7288 1.56836L12.2279 15.7822L12.2269 15.7881C12.0873 16.4757 11.4556 16.833 10.9378 16.833H4.46028C4.30427 16.8329 4.1489 16.8063 4.07063 16.7803C3.72428 16.6882 3.44323 16.463 3.27766 16.1611L3.27473 16.1582L0.159495 10.2695H0.160472C-0.0631742 9.8579 -0.0533225 9.35829 0.191722 8.95605C0.435654 8.55601 0.866701 8.30972 1.33723 8.30957H4.35383L5.61653 1.10645L5.6175 1.10449C5.73448 0.472176 6.28104 0.000136323 6.93098 0H13.4075ZM4.36164 16.5791L4.46028 16.583C4.40529 16.583 4.35157 16.577 4.30403 16.5713C4.32235 16.5735 4.34178 16.5775 4.36164 16.5791ZM4.83723 15.1777H10.3782L7.62434 9.97266H5.75422L4.83723 15.1777ZM3.51887 13.0801L4.0677 9.96484H1.87239L3.51887 13.0801ZM6.04719 8.31738H7.82258C8.25326 8.31738 8.6513 8.52848 8.90071 8.86816L8.99836 9.02148L8.99934 9.02441L11.056 12.9062L13.0306 1.66309H7.21125L6.04719 8.31738Z" fill={color}/>
  </svg>
);

const JusIAIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32" fill="none" width={size} height={size}>
    <path fillRule="evenodd" clipRule="evenodd" fill="#FC0" d="M26.098 0H12.663c-.508 0-.944.374-1.032.883l-.36 2.09s-.004.016-.004.023L8.768 17.52h5.734c.39 0 .746.216.93.565l6.428 12.342s.077.152.102.272c.016.079.023.134.028.178v.162a1 1 0 0 1-.014.1q.006-.02.01-.04l4.788-27.732.366-2.112A1.067 1.067 0 0 0 26.098 0" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#3D82DA" d="M6.478 31.181v-.004q-.007-.044-.011-.093v-.016c0-.027-.005-.057-.005-.085v-.03q0-.036.003-.074.001-.026.006-.053.002-.027.007-.055.01-.055.02-.113L8.767 17.52H1.049c-.792.002-1.298.862-.924 1.573l6.428 12.342.01.016a1 1 0 0 1-.085-.27" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#77B340" d="M21.99 31.038c-.041.584-.58.969-1.026.962H7.536c-.175 0-.356-.046-.356-.046-.557-.152-.82-.676-.681-1.296L8.766 17.52H14.5c.39 0 .747.216.931.565l6.428 12.342s.077.152.102.272.03.19.03.24z" />
  </svg>
);

const JusIABannerIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path d="M15.92 1.87305C16.3025 1.87305 16.6691 2.03356 16.9249 2.32812L16.9337 2.33691L16.9415 2.34375L16.9483 2.35254C17.2021 2.65513 17.3108 3.04823 17.2423 3.44043L17.2413 3.44141L14.7403 17.6553L14.7393 17.6611C14.5997 18.3487 13.9681 18.7061 13.4503 18.7061H6.97273C6.81672 18.706 6.66135 18.6793 6.58308 18.6533C6.23673 18.5613 5.95568 18.336 5.79011 18.0342L5.78718 18.0312L2.67195 12.1426H2.67292C2.44928 11.7309 2.45913 11.2313 2.70417 10.8291C2.94811 10.4291 3.37915 10.1828 3.84968 10.1826H6.86628L8.12898 2.97949L8.12995 2.97754C8.24693 2.34522 8.79349 1.87318 9.44343 1.87305H15.92ZM6.87409 18.4521L6.97273 18.4561C6.91774 18.456 6.86402 18.4501 6.81648 18.4443C6.83481 18.4466 6.85423 18.4506 6.87409 18.4521ZM7.34968 17.0508H12.8907L10.1368 11.8457H8.26667L7.34968 17.0508ZM6.03132 14.9531L6.58015 11.8379H4.38484L6.03132 14.9531ZM8.55964 10.1904H10.335C10.7657 10.1904 11.1638 10.4015 11.4132 10.7412L11.5108 10.8945L11.5118 10.8975L13.5684 14.7793L15.543 3.53613H9.7237L8.55964 10.1904Z" fill="#007A5F"/>
  </svg>
);

const BookmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14.167 1.66797C15.5476 1.66813 16.667 2.78736 16.667 4.16797V15.834C16.667 18.0907 13.9129 19.1926 12.3564 17.5586L10 15.084L7.64355 17.5586C6.08713 19.1926 3.33301 18.0907 3.33301 15.834V4.16797C3.33301 2.78737 4.45245 1.66816 5.83301 1.66797H14.167ZM5.83301 3.33398C5.37293 3.33417 5 3.70785 5 4.16797V15.834C5 16.5861 5.91769 16.9536 6.43652 16.4092L9.39648 13.3008C9.55375 13.1358 9.77204 13.043 10 13.043C10.228 13.043 10.4462 13.1358 10.6035 13.3008L13.5635 16.4092C14.0823 16.9536 15 16.5861 15 15.834V4.16797C15 3.70783 14.6271 3.33415 14.167 3.33398H5.83301Z" fill="#2B3950"/>
  </svg>
);

const MoreVerticalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" viewBox="0 0 4 17" fill="none">
    <path d="M1.66699 13.333C2.58747 13.333 3.33398 14.0795 3.33398 15C3.33381 15.9203 2.58736 16.666 1.66699 16.666C0.746635 16.666 0.000175886 15.9203 0 15C0 14.0795 0.746527 13.333 1.66699 13.333ZM1.66699 13.333C2.58747 13.333 3.33398 14.0795 3.33398 15C3.33381 15.9203 2.58736 16.666 1.66699 16.666C0.746635 16.666 0.000175886 15.9203 0 15C0 14.0795 0.746527 13.333 1.66699 13.333ZM1.66699 6.66602C2.58747 6.66602 3.33398 7.41253 3.33398 8.33301C3.33398 9.25348 2.58747 10 1.66699 10C0.746527 9.99999 0 9.25348 0 8.33301C6.44128e-08 7.41254 0.746527 6.66602 1.66699 6.66602ZM1.66699 0C2.58736 0 3.33381 0.745691 3.33398 1.66602C3.33398 2.58649 2.58747 3.33301 1.66699 3.33301C0.746527 3.333 0 2.58648 0 1.66602C0.000175838 0.745697 0.746635 1.10106e-05 1.66699 0Z" fill="#2B3950"/>
  </svg>
);

const DocumentRedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M9.26758 6.67285C9.66586 6.62134 10.0447 6.86194 10.168 7.24414C10.4448 8.10199 10.7202 8.62363 11.1006 9.06641C11.496 9.52661 12.0441 9.94967 12.959 10.5547C13.2995 10.7798 13.4269 11.2184 13.2598 11.5908C13.0926 11.9632 12.6806 12.1593 12.2861 12.0547C11.4096 11.8223 10.8021 11.8166 10.2188 11.9756C9.60293 12.1434 8.93941 12.5137 7.97559 13.1836C7.64441 13.4138 7.19535 13.0889C6.91016 13.0889C6.62519 12.8037 6.58547 12.3555 6.81543 12.0244C7.47797 11.0712 7.87566 10.3745 8.12598 9.70703C8.37272 9.049 8.49229 8.37676 8.54297 7.4541C8.56499 7.05317 8.86939 6.72444 9.26758 6.67285Z" fill="#E41E3F"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.9756 0C11.6386 0 12.2753 0.262634 12.7441 0.731445L15.9346 3.92188C16.4034 4.39071 16.666 5.02741 16.666 5.69043V14.166C16.666 15.5467 15.5467 16.666 14.166 16.666H2.5C2.46975 16.666 2.43957 16.6643 2.41016 16.6611C1.07098 16.6139 0 15.5167 0 14.166V11.666C0.000176062 10.7458 0.745809 10.0002 1.66602 10H3.33301V2.5C3.33301 1.1193 4.45231 1.10169e-05 5.83301 0H10.9756ZM1.66602 14.166C1.66602 14.6262 2.03977 15 2.5 15C2.9312 14.9998 3.28627 14.6719 3.3291 14.252C3.33197 14.2238 3.33301 14.1949 3.33301 14.166V11.666H1.66602V14.166ZM5.83301 1.66602C5.37278 1.66603 5 2.03977 5 2.5V14.166C5 14.247 4.99386 14.3272 4.98633 14.4062C4.98408 14.4298 4.98044 14.4532 4.97754 14.4766C4.97106 14.5289 4.96376 14.5806 4.9541 14.6318C4.94823 14.663 4.94159 14.6939 4.93457 14.7246C4.92437 14.7693 4.91393 14.8137 4.90137 14.8574C4.8923 14.889 4.88233 14.9201 4.87207 14.9512C4.86677 14.9672 4.86304 14.9841 4.85742 15H14.166C14.6263 15 15 14.6263 15 14.166V6.66602H12.5C11.1193 6.666 10 5.54672 10 4.16602V1.66602H5.83301ZM11.666 4.16602C11.666 4.62625 12.0398 4.99999 12.5 5H14.6553L11.666 2.01074V4.16602Z" fill="#E41E3F"/>
  </svg>
);

const DownloadGrayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M13.5537 11.4053C13.9282 11.1378 14.4493 11.2241 14.7168 11.5986L16.4541 14.0312C17.2416 15.1343 16.453 16.6659 15.0977 16.666H1.66992C0.314358 16.666 -0.474296 15.1344 0.313477 14.0312L2.05078 11.5986C2.3183 11.2242 2.83841 11.1378 3.21289 11.4053C3.58729 11.6728 3.67456 12.1929 3.40723 12.5674L1.66992 15H15.0977L13.3604 12.5674C13.0929 12.193 13.1795 11.6729 13.5537 11.4053ZM8.38379 0C8.84389 0.000163555 9.2168 0.372871 9.2168 0.833008V8.82129L11.9609 6.07715C12.2864 5.75176 12.8142 5.75173 13.1396 6.07715C13.4649 6.40258 13.465 6.93047 13.1396 7.25586L8.97266 11.4219C8.64723 11.7473 8.11939 11.7473 7.79395 11.4219L3.62793 7.25586C3.30249 6.93042 3.30249 6.40259 3.62793 6.07715C3.95338 5.75186 4.48125 5.75176 4.80664 6.07715L7.5498 8.82129V0.833008C7.5498 0.37277 7.92355 -4.02352e-08 8.38379 0Z" fill="#455468"/>
  </svg>
);

const SparkleIcon = ({ color = "#007A5F" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M3 5h4"/><path d="M21 17v4"/><path d="M19 19h4"/>
  </svg>
);

const LogoJusbrasil = () => (
  <div className="flex items-center gap-2 cursor-pointer select-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.64623 19.3753V19.375C0.0720787 18.4697 -0.467355 16.4636 0.441418 14.8951L8.12198 1.64051C9.03104 0.0717318 11.0442 -0.465721 12.6186 0.439939C14.193 1.3456 14.7325 3.35164 13.8234 4.92013L6.14283 18.1748C5.23406 19.7432 3.22066 20.2807 1.64623 19.3753" fill="#FFCE00"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20.2991 19.375C18.7247 20.2804 16.7116 19.7432 15.8025 18.1748L8.12198 4.92013C7.2132 3.35164 7.75264 1.3456 9.32679 0.43994C10.9012 -0.465721 12.9143 0.0717318 13.8234 1.64051L21.504 14.8951C22.413 16.4636 21.8736 18.4697 20.2991 19.375Z" fill="#378CC8"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.6887 1.4288C13.6669 1.3971 13.6465 1.36484 13.6239 1.33399C13.5842 1.2805 13.5418 1.23012 13.4999 1.17974C13.4713 1.14578 13.4444 1.11097 13.4147 1.07814C13.3774 1.0371 13.3374 0.998896 13.2984 0.960122C13.2596 0.921349 12.2224 0.882009 13.1807 0.844933C13.1473 0.814933 13.1122 0.788047 13.0779 0.759462C13.0275 0.717858 12.9774 0.675688 12.924 0.636632C12.8928 0.613707 12.86 0.59333 12.828 0.571537C12.7694 0.531632 12.7103 0.492292 12.6486 0.455782C12.6126 0.434839 12.5756 0.415877 12.5388 0.396066C12.481 0.36465 12.423 0.334367 12.3641 0.306915C12.3174 0.285122 12.2699 0.265877 12.2224 0.246349C12.1731 0.225971 12.1236 0.20616 12.0735 0.18833C12.0174 0.168518 11.9608 0.151254 11.904 0.134273C11.8604 0.121537 11.8168 0.109084 11.7729 0.0980466C11.7124 0.0827636 11.6509 0.0700277 11.5895 0.0581409C11.5465 0.0502164 11.5035 0.0422919 11.4602 0.0357825C11.4005 0.0267258 11.3405 0.0202164 11.2802 0.014556C11.2324 0.0100277 11.1845 0.00606547 11.137 0.00380132C11.0826 0.000971127 11.028 0.00012207 10.9734 0.00012207C10.9188 0.00012207 10.8641 0.000971127 10.8098 0.00380132C10.762 0.00606547 10.7144 0.0100277 10.6666 0.014556C10.6063 0.0202164 10.5463 0.0267258 10.4866 0.0357825C10.4433 0.0422919 10.4003 0.0502164 10.3573 0.0581409C10.2958 0.0700277 10.2344 0.0827636 10.1736 0.0980466C10.13 0.109084 10.0864 0.121537 10.0428 0.134273C9.98594 0.151254 9.92905 0.168518 9.8733 0.18833C9.8232 0.20616 9.77368 0.225971 9.72415 0.246349C9.6766 0.265877 9.62934 0.285122 9.58264 0.306915C9.52377 0.334367 9.46575 0.36465 9.40773 0.396066C9.37122 0.415877 9.33415 0.434839 9.2982 0.455782C9.23622 0.492292 9.17707 0.531915 9.11849 0.571537C9.08651 0.59333 9.05396 0.613707 9.02283 0.636632C8.96934 0.675688 8.91896 0.717858 8.86858 0.759745C8.83434 0.788047 8.79924 0.815216 8.76613 0.844933C8.72509 0.882009 8.68717 0.921349 8.64811 0.960122C8.60905 0.999179 8.56915 1.0371 8.53207 1.07814C8.50236 1.11097 8.47519 1.14578 8.44688 1.17974C8.40471 1.23012 8.36226 1.2805 8.32292 1.33399C8.30028 1.36484 8.27962 1.3971 8.25811 1.4288C8.21792 1.48739 8.1783 1.54654 8.14151 1.60824C7.55764 2.59399 7.50726 3.85512 8.12283 4.91701L10.9734 9.83644L13.824 4.91701C14.4392 3.85512 14.3889 2.59399 13.8053 1.60852C13.7685 1.54654 13.7286 1.48739 13.6887 1.4288" fill="#7AB441"/>
    </svg>
    <span className="font-bold text-[18px] text-[#595B63]">Jusbrasil</span>
  </div>
);

const LogoJusIA = ({ onClick }: { onClick?: () => void }) => (
  <div className="flex items-center cursor-pointer select-none text-[#595B63]" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 32" preserveAspectRatio="xMidYMid meet" fill="none" role="img" height="22" className="h-[22px]">
      <title>Marca Jus IA</title>
      <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M31.945 26.046V23.54c1.31.888 2.72 1.337 4.226 1.337 1.507 0 2.674-.373 3.366-1.115.687-.741 1.03-1.962 1.03-3.654V4.8h2.482v15.505q-.001 2.032-.586 3.472c-.394.959-.925 1.674-1.603 2.14q-1.016.7-2.079.994a8.6 8.6 0 0 1-2.29.293q-2.466-.001-4.546-1.154zM48.013 19.945v-9.63h2.482v9.74c0 1.688.38 2.927 1.14 3.708.76.786 1.946 1.177 3.567 1.177 1.62 0 2.78-.39 3.553-1.177q1.154-1.178 1.154-3.707v-9.741h2.482v9.63q-.001 3.465-1.877 5.359-1.877 1.897-5.312 1.896-3.436.002-5.312-1.896-1.876-1.896-1.877-5.36M65.299 14.826q0-1.992 1.502-3.397 1.504-1.407 4.588-1.408 2.198 0 4.396 1.013v2.393q-1.963-1.14-4.126-1.141-3.873 0-3.874 2.544-.001.867.94 1.394.939.532 2.298.88 1.36.352 2.72.838 1.36.493 2.308 1.657c.632.777.948 1.771.948 2.974q-.001 2.166-1.672 3.397-1.67 1.232-4.625 1.23c-1.969 0-3.63-.417-5.183-1.252v-2.544c1.644.977 3.338 1.47 5.083 1.47q3.909-.002 3.91-2.3.001-1.24-.939-1.94t-2.298-1.053a62 62 0 0 1-2.72-.768 5.3 5.3 0 0 1-2.308-1.403q-.948-.986-.948-2.584M85.466 26.685V4.8h3.122v21.885zM92.353 26.685 101.36 4.8h3.072l8.971 21.885h-3.389l-2.427-6.167h-9.419l-2.427 6.167zm6.942-8.987h7.171l-3.586-9.084z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#FC0" d="M26.098 0H12.663c-.508 0-.944.374-1.032.883l-.36 2.09s-.004.016-.004.023L8.768 17.52h5.734c.39 0 .746.216.93.565l6.428 12.342s.077.152.102.272c.016.079.023.134.028.178v.162a1 1 0 0 1-.014.1q.006-.02.01-.04l4.788-27.732.366-2.112A1.067 1.067 0 0 0 26.098 0"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#3D82DA" d="M6.478 31.181v-.004q-.007-.044-.011-.093v-.016c0-.027-.005-.057-.005-.085v-.03q0-.036.003-.074.001-.026.006-.053.002-.027.007-.055.01-.055.02-.113L8.767 17.52H1.049c-.792.002-1.298.862-.924 1.573l6.428 12.342.01.016a1 1 0 0 1-.085-.27"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#77B340" d="M21.99 31.038c-.041.584-.58.969-1.026.962H7.536c-.175 0-.356-.046-.356-.046-.557-.152-.82-.676-.681-1.296L8.766 17.52H14.5c.39 0 .747.216.931.565l6.428 12.342s.077.152.102.272.03.19.03.24z"></path>
    </svg>
  </div>
);

// --- Estilos de Botão ---
const buttonStyle = {
  display: 'flex',
  height: '44px',
  minWidth: '56px',
  padding: '0 12px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: '1px solid #007A5F',
  background: '#007A5F',
  boxShadow: '0 2px 4px 0 rgba(25, 52, 102, 0.04)',
  cursor: 'pointer',
};

const secondaryButtonStyle = {
  ...buttonStyle,
  background: 'white',
};

const greyButtonStyle = {
  ...buttonStyle,
  background: 'white',
  border: '1px solid #94A3B8',
};

const buttonTextStyle = {
  textAlign: 'center' as const,
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '100%',
};

// --- Componente Jus IA View ---
const JusIAView = ({ onBack }: { onBack: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="flex h-full w-full bg-white font-inter overflow-hidden relative">
      {/* Sidebar */}
      <aside className="w-[280px] bg-[#F8FAFC] border-r border-[#E2E8F0] flex flex-col h-full flex-shrink-0">
        <div className="p-6 flex items-center justify-between mb-2">
          <LogoJusIA onClick={onBack} />
          <button className="text-[#64748B]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15.833 2.5C17.2137 2.5 18.333 3.61929 18.333 5V15C18.333 16.3807 17.2137 17.5 15.833 17.5H4.16699C2.78628 17.5 1.66699 16.3807 1.66699 15V5C1.66699 3.61929 2.78628 2.5 4.16699 2.5H15.833ZM4.16699 4.16699C3.70676 4.16699 3.33301 4.53976 3.33301 5V15C3.33301 15.4602 3.70676 15.833 4.16699 15.833H5.83301V4.16699H4.16699ZM7.5 15.833H15.833C16.2932 15.833 16.667 15.4602 16.667 15V5C16.667 4.53976 16.2932 4.16699 15.833 4.16699H7.5V15.833ZM11.833 7.83301C12.1092 7.46486 12.6318 7.39086 13 7.66699C13.3679 7.94307 13.4428 8.46489 13.167 8.83301L12.292 10L13.167 11.167C13.4428 11.5351 13.3679 12.0569 13 12.333C12.6318 12.6091 12.1092 12.5351 11.833 12.167L10.583 10.5C10.3609 10.2038 10.3609 9.79623 10.583 9.5L11.833 7.83301Z" fill="#2B3950"/>
            </svg>
          </button>
        </div>

        <div className="px-4 space-y-1 overflow-y-auto custom-scrollbar flex-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[#475569] font-semibold text-[14px] hover:bg-[#F1F5F9] rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5.83301 5.00026C6.29316 5.00026 6.66685 5.37315 6.66699 5.83327C6.66689 6.29342 6.29318 6.66726 5.83301 6.66726H4.16699C3.70675 6.66726 3.33301 7.04003 3.33301 7.50026V15.8333C3.33311 16.2934 3.70682 16.6673 4.16699 16.6673H12.5C12.9602 16.6673 13.3329 16.2934 13.333 15.8333V14.1673C13.333 13.707 13.7068 13.3333 14.167 13.3333C14.6271 13.3334 15 13.7071 15 14.1673V15.8333C14.9999 17.2139 13.8807 18.3333 12.5 18.3333H4.16699C2.78634 18.3333 1.66709 17.2139 1.66699 15.8333V7.50026C1.66699 6.11955 2.78628 5.00026 4.16699 5.00026H5.83301ZM12.6602 2.84499C13.9618 1.54349 16.0723 1.54366 17.374 2.84499C18.6757 4.14674 18.6757 6.25812 17.374 7.55983L12.0713 12.8626C10.9883 13.9455 9.57936 14.2756 8.52539 14.3567C7.99012 14.3979 7.51896 14.3767 7.18066 14.346C7.01076 14.3305 6.87184 14.3129 6.77344 14.2981C6.72428 14.2907 6.68474 14.2836 6.65625 14.2786L6.62207 14.2727L6.61133 14.2708L6.60742 14.2698H6.60547L6.76758 13.4524L6.60449 14.2688C6.27467 14.2029 6.01623 13.9443 5.9502 13.6145V13.6126L5.94922 13.6087L5.94727 13.5979L5.94141 13.5637C5.93639 13.5353 5.92926 13.4955 5.92188 13.4466C5.90705 13.3482 5.88849 13.2092 5.87305 13.0393C5.84229 12.701 5.8221 12.2291 5.86328 11.6936C5.9444 10.6397 6.27462 9.23156 7.35742 8.1487L12.6602 2.84499ZM16.1963 4.0237C15.5455 3.37287 14.4898 3.37295 13.8389 4.0237L8.53516 9.32741C7.85075 10.0121 7.59165 10.9607 7.52539 11.8216C7.49994 12.1525 7.50361 12.4555 7.51855 12.7005C7.76364 12.7154 8.06724 12.7201 8.39844 12.6946C9.25936 12.6283 10.2079 12.3684 10.8926 11.6839L16.1963 6.38112C16.847 5.73031 16.8469 4.67455 16.1963 4.0237Z" fill="#2B3950"/>
            </svg>
            Nova conversa
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[#475569] font-semibold text-[14px] hover:bg-[#F1F5F9] rounded-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Buscar em conversas
          </button>
          
          <div className="pt-6 pb-2">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[#475569] font-semibold text-[14px] hover:bg-[#F1F5F9] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 11.667C15.4602 11.667 15.833 12.0398 15.833 12.5V14.167H17.5L17.5859 14.1709C18.0058 14.2139 18.333 14.5688 18.333 15C18.333 15.4312 18.0058 15.7861 17.5859 15.8291L17.5 15.833H15.833V17.5C15.833 17.9602 15.4602 18.333 15 18.333C14.5398 18.333 14.167 17.9602 14.167 17.5V15.833H12.5C12.0398 15.833 11.667 15.4602 11.667 15C11.667 14.5398 12.0398 14.167 12.5 14.167H14.167V12.5C14.167 12.0398 14.5398 11.667 15 11.667ZM8.33301 2.5C9.71372 2.5 10.833 3.61929 10.833 5V5.83301H15.833C17.2136 5.83301 18.3328 6.95245 18.333 8.33301V9.16699C18.3328 9.62708 17.9601 10 17.5 10C17.0399 10 16.6672 9.62708 16.667 9.16699V8.33301C16.6668 7.87292 16.2931 7.5 15.833 7.5H3.33301V15L3.33789 15.0859C3.38091 15.5058 3.73577 15.833 4.16699 15.833H9.16699C9.62708 15.8332 10 16.2069 10 16.667C9.99982 17.127 9.62697 17.4998 9.16699 17.5H4.16699C2.82952 17.5 1.73701 16.4497 1.66992 15.1289L1.66992 15V5C1.66699 3.61929 2.78628 2.5 4.16699 2.5H8.33301ZM4.16699 4.16699C3.70676 4.16699 3.33301 4.53976 3.33301 5V5.83301H9.16699V5C9.16699 4.53976 8.79324 4.16699 8.33301 4.16699H4.16699Z" fill="#2B3950"/>
              </svg>
              Novo caso
            </button>
          </div>

          <div className="pt-6">
            <h4 className="px-3 text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2">Últimas conversas</h4>
            {[
              'Dano moral por atraso de voo',
              'Jurisprudências Dano Moral At...',
              'Nova conversa',
              'Petição - Danos morais em atr...',
              'Os 10 pintores mais importante...',
              'Petição Inicial por Danos Morai...'
            ].map((text, idx) => (
              <div 
                key={idx} 
                className="px-3 py-2 text-[14px] truncate cursor-pointer rounded-lg hover:bg-[#F1F5F9] text-[#475569]"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-[#E2E8F0]">
           <div className="flex items-center justify-between gap-3 p-2 hover:bg-[#F1F5F9] rounded-xl cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D9F99D] text-[#365314] rounded-full flex items-center justify-center font-bold text-[14px]">
                  PO
                </div>
                <span className="font-bold text-[14px] text-[#0F172A]">Pedro Oliveira</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full bg-white relative">
        {/* Header Area */}
        <div className="h-[64px] flex items-center justify-end px-6 gap-3">
          <button className="p-2 text-[#475569] hover:bg-gray-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M13.8173 6.66602C15.2963 6.66606 16.4518 7.94336 16.3046 9.41504L15.8046 14.415C15.6768 15.693 14.6017 16.666 13.3173 16.666H3.00092C1.71657 16.666 0.640432 15.693 0.512634 14.415L0.0126343 9.41504C-0.134472 7.94339 1.02193 6.66606 2.50092 6.66602H13.8173ZM2.50092 8.33301C2.008 8.33305 1.62288 8.75856 1.67181 9.24902L2.17181 14.249C2.21441 14.675 2.57282 15 3.00092 15H13.3173C13.7454 15 14.1038 14.675 14.1464 14.249L14.6464 9.24902C14.6953 8.75857 14.3102 8.33305 13.8173 8.33301H2.50092ZM13.9921 3.33301C14.4523 3.33301 14.825 3.70593 14.8251 4.16602C14.8251 4.62625 14.4524 5 13.9921 5H2.32513C1.86514 4.99972 1.49213 4.62608 1.49213 4.16602C1.4923 3.7061 1.86525 3.33329 2.32513 3.33301H13.9921ZM12.3251 0C12.7854 0 13.1591 0.372771 13.1591 0.833008C13.1591 1.29325 12.7854 1.66602 12.3251 1.66602H3.99213C3.53198 1.66591 3.15912 1.29318 3.15912 0.833008C3.15912 0.372837 3.53198 0.000108216 3.99213 0H12.3251Z" fill="#2B3950"/>
            </svg>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pt-8 pb-32">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-[13px] text-[#64748B] mb-2 font-medium">Resposta</div>
            <div className="flex items-center gap-2 mb-6 text-[#1E293B] text-[14px] font-medium">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007A5F" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
               Usou: <span className="font-normal text-[#475569]">busca jurídica no Jusbrasil</span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                variants={itemVariants}
                className="text-[#334155] text-[16px] leading-[1.6] mb-8"
              >
                Para enriquecer a análise, realizei uma pesquisa jurisprudencial sobre o tema, cujos resultados foram integrados ao texto.
              </motion.p>

              <motion.h1 
                variants={itemVariants}
                className="text-[var(--color-base-low-pure)] text-[28px] font-semibold leading-[130%] mb-6"
              >
                Análise Estratégica do Precedente: Exigência de Prévio Pedido Administrativo
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-[#334155] text-[16px] leading-[1.6] mb-8"
              >
                Esta análise aborda a decisão do TJSP na Apelação Cível 1039627-46.2022.8.26.0576, que extinguiu uma ação sobre dívida prescrita na plataforma "Serasa Limpa Nome" por falta de interesse de agir.
              </motion.p>

              <motion.h2 
                variants={itemVariants}
                className="text-[var(--color-base-low-pure)] text-[20px] font-semibold mb-4"
              >
                Núcleo da Decisão
              </motion.h2>
              <div className="space-y-4 mb-8">
                <motion.p variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6]">
                  <span className="font-bold">Tese Vencedora:</span> A tese que prevaleceu foi de natureza processual: a ausência de comprovação de um prévio pedido administrativo para a exclusão da dívida prescrita afasta o interesse de agir, levando à extinção do processo sem análise do mérito.
                </motion.p>
                <motion.p variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6]">
                  <span className="font-bold">Fundamento Principal:</span> A decisão não chegou a debater se a dívida era ou não exigível. O fator decisivo foi o descumprimento de uma etapa prévia, conforme exigido pelo Enunciado 11 do Comunicado CG nº 424/2024 do TJSP. O Judiciário, nesse caso, só deve ser acionado após uma recusa ou falha na via administrativa.
                </motion.p>
                <motion.p variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6]">
                  <span className="font-bold">Circunstâncias a Considerar:</span> A tese pode ser afastada se o autor comprovar que fez o pedido administrativo e ele foi negado ou não respondido em prazo razoável, ou, excepcionalmente, se demonstrar que o canal administrativo é comprovadamente ineficaz ou inexistente.
                </motion.p>
              </div>

              <motion.h2 
                variants={itemVariants}
                className="text-[var(--color-base-low-pure)] text-[20px] font-semibold mb-4"
              >
                O Que Convenceu o Tribunal?
              </motion.h2>
              <div className="space-y-4 mb-8">
                <motion.p variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6]">
                  <span className="font-bold">Argumento Jurídico Central:</span> O pilar da decisão foi a falta de necessidade-adequação do provimento jurisdicional. O tribunal entendeu que, sem uma tentativa de resolver a questão diretamente com o credor ou a plataforma, o autor não poderia demonstrar que a ação judicial era o único meio necessário para obter seu direito.
                </motion.p>
                <motion.p variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6]">
                  <span className="font-bold">Base Normativa:</span> A decisão se apoiou fortemente em normas administrativas da própria Corregedoria do TJSP, como o mencionado Enunciado 11 e o Comunicado CG nº 02/2017, que visam combater a litigância predatória. Isso demonstra uma preocupação do tribunal com a gestão processual, mais do que com o direito material em si.
                </motion.p>
                <motion.p variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6]">
                  <span className="font-bold">Fator Probatório Decisivo:</span> O ponto central foi a ausência de prova. A controvérsia não foi sobre a prescrição da dívida, mas sobre a existência de uma tentativa de solução extrajudicial. A falha do autor em juntar um e-mail, um número de protocolo ou qualquer outra evidência do contato prévio foi fatal para a sua pretensão.
                </motion.p>
              </div>

              <motion.h2 
                variants={itemVariants}
                className="text-[var(--color-base-low-pure)] text-[20px] font-semibold mb-4"
              >
                O Que Falhou para a Parte Derrotada?
              </motion.h2>
              <div className="space-y-4 mb-8">
                <motion.p variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6]">
                  <span className="font-bold">Erro Estratégico Principal:</span> O erro crucial foi a judicialização imediata do conflito. A parte autora partiu do pressuposto de que a simples existência do apontamento, mesmo em uma plataforma de negociação como a "Serasa Limpa Nome", seria suficiente para justificar a ação, ignorando a necessidade de esgotar as vias mais simples de solução.
                </motion.p>
                <motion.p variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6]">
                  <span className="font-bold">Fragilidade da Posição:</span> A tese de mérito do autor (inexigibilidade de dívida prescrita) provavelmente estava correta, mas tornou-se irrelevante. A derrota não veio pela força da tese do réu, mas pela fragilidade processual da postulação do autor, que não superou a barreira da admissibilidade.
                </motion.p>
              </div>

              <motion.h2 
                variants={itemVariants}
                className="text-[var(--color-base-low-pure)] text-[20px] font-semibold mb-4"
              >
                Aplicação Estratégica do Precedente
              </motion.h2>
              
              <div className="mb-8">
                <motion.p variants={itemVariants} className="text-[#0F172A] text-[16px] font-bold mb-3">Se este precedente lhe favorece (defendendo o credor/plataforma):</motion.p>
                <ul className="space-y-2 mb-6 ml-4">
                  <motion.li variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6] flex items-start gap-2">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#334155] shrink-0"></span>
                    <span><span className="font-bold">Ação:</span> Sempre verifique se a petição inicial é instruída com a prova do requerimento administrativo.</span>
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6] flex items-start gap-2">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#334155] shrink-0"></span>
                    <span><span className="font-bold">Tese:</span> Caso não seja, apresente uma preliminar de falta de interesse de agir na contestação, fundamentando-a no precedente analisado e nas normas do TJSP.</span>
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6] flex items-start gap-2">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#334155] shrink-0"></span>
                    <span><span className="font-bold">Resultado Esperado:</span> A extinção do processo sem resolução do mérito, com a condenação do autor aos ônus da sucumbência.</span>
                  </motion.li>
                </ul>

                <motion.p variants={itemVariants} className="text-[#0F172A] text-[16px] font-bold mb-3">Se este precedente lhe desfavorece (defendendo o devedor):</motion.p>
                <ul className="space-y-4 mb-6 ml-4">
                  <motion.li variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6] flex items-start gap-2">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#334155] shrink-0"></span>
                    <span><span className="font-bold">Ação Preventiva (Regra de Ouro):</span> Antes de ajuizar a ação, instrua seu cliente a fazer um requerimento administrativo formal para a baixa do apontamento. Utilize um meio que gere comprovante (e-mail com confirmação de leitura, protocolo online, carta com aviso de recebimento). Anexe essa prova à petição inicial.</span>
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6] flex items-start gap-2">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#334155] shrink-0"></span>
                    <span><span className="font-bold">Reforço Probatório:</span> O documento mais importante para este tipo de ação passa a ser a prova da tentativa de solução administrativa. Sem ela, o risco de extinção prematura do processo é altíssimo.</span>
                  </motion.li>
                  <motion.li variants={itemVariants} className="text-[#334155] text-[16px] leading-[1.6] flex items-start gap-2">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#334155] shrink-0"></span>
                    <div>
                      <span className="font-bold">Estratégia de Distinção (Distinguishing):</span> Se a ação já foi proposta sem o requerimento, sua única saída é tentar diferenciar seu caso. Argumente, por exemplo, que:
                      <ul className="mt-2 space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#334155] shrink-0"></span>
                          <span>A plataforma não oferece um canal claro e funcional para a solicitação, tornando o procedimento impossível ou excessivamente oneroso (prova diabólica).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#334155] shrink-0"></span>
                          <span>Houve uma recusa de crédito comprovadamente ligada ao apontamento, demonstrando um dano imediato e a urgência da tutela judicial que não poderia aguardar o trâmite administrativo.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#334155] shrink-0"></span>
                          <span>O apontamento foi feito de forma associada a um score de crédito ou a uma negativação tradicional, extrapolando o mero caráter de "proposta de acordo" da plataforma "Limpa Nome".</span>
                        </li>
                      </ul>
                    </div>
                  </motion.li>
                </ul>
              </div>

              <motion.p 
                variants={itemVariants}
                className="text-[#334155] text-[16px] leading-[1.6] mb-8"
              >
                Espero que esta análise detalhada seja útil para sua atuação. Caso precise aprofundar algum ponto ou redigir uma petição utilizando estes argumentos, estou à disposição.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-[800px] mx-auto">
            <div className="relative bg-white border border-[#CBD5E0] rounded-2xl p-4 shadow-sm">
              <input 
                type="text" 
                placeholder="Faça uma pergunta, adicione documentos ou continue a conversa..."
                className="w-full text-[15px] outline-none placeholder-[#94A3B8] pr-24"
              />
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <button className="border border-[#E2E8F0] rounded-lg text-[#64748B] hover:bg-gray-50" style={{ display: 'flex', height: '36px', minWidth: '40px', maxHeight: '36px', padding: '0 12px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path d="M13.8173 6.66602C15.2963 6.66606 16.4518 7.94336 16.3046 9.41504L15.8046 14.415C15.6768 15.693 14.6017 16.666 13.3173 16.666H3.00092C1.71657 16.666 0.640432 15.693 0.512634 14.415L0.0126343 9.41504C-0.134472 7.94339 1.02193 6.66606 2.50092 6.66602H13.8173ZM2.50092 8.33301C2.008 8.33305 1.62288 8.75856 1.67181 9.24902L2.17181 14.249C2.21441 14.675 2.57282 15 3.00092 15H13.3173C13.7454 15 14.1038 14.675 14.1464 14.249L14.6464 9.24902C14.6953 8.75857 14.3102 8.33305 13.8173 8.33301H2.50092ZM13.9921 3.33301C14.4523 3.33301 14.825 3.70593 14.8251 4.16602C14.8251 4.62625 14.4524 5 13.9921 5H2.32513C1.86514 4.99972 1.49213 4.62608 1.49213 4.16602C1.4923 3.7061 1.86525 3.33329 2.32513 3.33301H13.9921ZM12.3251 0C12.7854 0 13.1591 0.372771 13.1591 0.833008C13.1591 1.29325 12.7854 1.66602 12.3251 1.66602H3.99213C3.53198 1.66591 3.15912 1.29318 3.15912 0.833008C3.15912 0.372837 3.53198 0.000108216 3.99213 0H12.3251Z" fill="#2B3950"/>
                    </svg>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 border border-[#E2E8F0] rounded-lg text-[#475569] text-[14px] font-bold hover:bg-gray-50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                    Pesquisa fundamentada
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#64748B] hover:bg-gray-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                  </button>
                  <button className="w-10 h-10 bg-[#F1F5F9] rounded-xl flex items-center justify-center text-[#94A3B8] cursor-not-allowed">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <span className="text-[12px] text-[#94A3B8]">O Jus IA prioriza nossa base de dados, mas pode cometer erros. Verifique as informações importantes.</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute top-[85%] right-10 z-20">
          <div className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-full shadow-md flex items-center justify-center text-[#64748B] cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
      `}</style>
    </div>
  );
};

// --- Componente Modal de Detalhes ---
const DetailsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-[640px] overflow-hidden flex flex-col"
      >
        <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold text-[#0F172A]">Detalhes da jurisprudência</h2>
            <p className="text-[#64748B] text-[14px] mt-0.5">Dados oficiais e contexto do julgamento.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="p-8 space-y-8 overflow-y-auto max-h-[85vh] custom-scrollbar">
          {/* Top Info Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A] mb-1">Processo</h4>
                <a href="#" className="text-[#007A5F] underline text-[14px]">0000931-21.2017.1.00.0000</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7"/><path d="M9 7v1a3 3 0 0 0 6 0V7"/><path d="M15 7v1a3 3 0 0 0 6 0V7"/><path d="M4 21V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17"/></svg>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A] mb-1">Órgão Julgador</h4>
                <p className="text-[#475569] text-[14px]">TRT2 · 14ª Turma</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A] mb-1">Data de julgamento</h4>
                <p className="text-[#475569] text-[14px]">21/05/2021</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A] mb-1">Data de publicação</h4>
                <p className="text-[#475569] text-[14px]">21/05/2021</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A] mb-1">Relator</h4>
                <p className="text-[#475569] text-[14px]">Des.(a) Nelson Missias de Morais</p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#E2E8F0]"></div>

          {/* Envolvidos */}
          <div>
            <h3 className="text-[16px] font-bold text-[#0F172A] mb-6">Envolvidos</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[13px] font-bold text-[#0F172A] mb-4">Polo Ativo</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[14px] font-bold text-[#0F172A]">Paulo Silva Sauro</p>
                    <p className="text-[13px] text-[#64748B]">Requerente</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#0F172A]">Arthur Aguiar Oliveira</p>
                    <p className="text-[13px] text-[#64748B]">Advogado(a)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[13px] font-bold text-[#0F172A] mb-4">Polo Passivo</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[14px] font-bold text-[#0F172A]">Maria Quitéria</p>
                    <p className="text-[13px] text-[#64748B]">Requerido</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#0F172A]">Marcos Horizonte</p>
                    <p className="text-[13px] text-[#64748B]">Advogado(a)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[13px] font-bold text-[#0F172A] mb-4">Outras Partes</h4>
                <div>
                  <p className="text-[14px] font-bold text-[#0F172A]">Gabriel Batista Bastos</p>
                  <p className="text-[13px] text-[#64748B]">Envolvido(a)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#E2E8F0]"></div>

          {/* Enquadramento processual */}
          <div>
            <h3 className="text-[16px] font-bold text-[#0F172A] mb-6">Enquadramento processual</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A] mb-1">Grau</h4>
                <p className="text-[14px] text-[#64748B]">2º grau</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A] mb-1">Tipos de decisão</h4>
                <p className="text-[14px] text-[#64748B]">Indenização por Dano Moral / Dano Material</p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#0F172A] mb-1">Classe da decisão</h4>
                <p className="text-[14px] text-[#64748B]">Repercussão geral</p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#E2E8F0]"></div>

          {/* De onde vêm as informações */}
          <div>
            <h4 className="text-[14px] font-bold text-[#0F172A] mb-2">De onde vêm as informações do Jusbrasil?</h4>
            <p className="text-[13px] text-[#64748B] leading-relaxed">
              Todas as informações exibidas neste documento foram coletadas dos Sistemas dos Tribunais e dos Diários Oficiais. Eventuais anonimizações e/ou exclusões de dados pessoais poderão ser realizadas como salvaguardas e em respeito aos direitos do titular dos dados.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Componente StickyBar ---
const StickyBar = ({ isVisible, topOffset, activeTab, onTabClick, activeResumoTab }: { isVisible: boolean; topOffset: number; activeTab: string; onTabClick: (tab: string) => void; activeResumoTab: string }) => {
  return (
    <div 
      className={`fixed left-0 right-0 bg-white border-b border-[#CCD5E1] z-[50] shadow-md transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      style={{ top: `${topOffset}px` }}
    >
      <div className="max-w-[980px] mx-auto flex flex-col px-4 lg:px-0">
        {/* Top Row */}
        <div className="h-[72px] flex items-center justify-between">
          <div className="flex flex-col min-w-0 mr-4">
            <span className="text-[12px] text-[#64748B] font-normal mb-0.5">2º grau</span>
            <h2 className="text-[16px] font-bold text-[#0F172A] truncate">
              Superior Tribunal de Justiça STJ - AGRAVO INTERNO NO AGRAVO EM RE...
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button style={buttonStyle}>
              <div className="flex items-center gap-2">
                <QuoteIcon />
                <span style={{...buttonTextStyle, color: 'white'}}>Ementa</span>
              </div>
            </button>
            <button style={secondaryButtonStyle}>
              <div className="flex items-center gap-2">
                <JurisprudenciaIcon color="#007A5F" />
                <span style={{...buttonTextStyle, color: '#007A5F'}}>Jurisprudência semelhante</span>
              </div>
            </button>
            <div className="flex items-center gap-1 ml-2">
              <button className="text-[#2B3950] p-2 hover:bg-gray-100 rounded-lg">
                <BookmarkIcon />
              </button>
              <button className="text-[#2B3950] p-2 hover:bg-gray-100 rounded-lg">
                <MoreVerticalIcon />
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Row (Tabs) - Only visible in Panorama */}
        {activeResumoTab === 'Panorama' && (
          <div className="flex items-center gap-2 h-[48px]">
            {['Ementa', 'Inteiro teor', 'Certidão de julgamento', 'Relatório e voto'].map(tab => {
              const isActive = tab === activeTab;
              return (
                <button 
                  key={tab} 
                  onClick={() => onTabClick(tab)}
                  className={`px-4 h-[36px] flex items-center text-[14px] font-semibold rounded-md transition-colors ${isActive ? 'bg-[#EAF6F3] text-[#007A5F]' : 'text-[#2B3950] hover:bg-gray-50'}`}
                >
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeResumoTab, setActiveResumoTab] = useState('Panorama');
  const [activeStickyTab, setActiveStickyTab] = useState('Ementa');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [view, setView] = useState<'doc' | 'chat'>('doc');
  const [variant, setVariant] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHistoricoExpanded, setIsHistoricoExpanded] = useState(false);
  const [isPedidosExpanded, setIsPedidosExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);

      // Scroll Spy for StickyBar items
      const sections = ['ementa', 'inteiro-teor', 'certidao', 'relatorio'];
      const sectionLabels: Record<string, string> = {
        'ementa': 'Ementa',
        'inteiro-teor': 'Inteiro teor',
        'certidao': 'Certidão de julgamento',
        'relatorio': 'Relatório e voto'
      };

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveStickyTab(sectionLabels[id]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 130; // Account for StickyBar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStickyTabClick = (tab: string) => {
    const labelToId: Record<string, string> = {
      'Ementa': 'ementa',
      'Inteiro teor': 'inteiro-teor',
      'Certidão de julgamento': 'certidao',
      'Relatório e voto': 'relatorio'
    };
    scrollToSection(labelToId[tab]);
  };

  const processDocuments = [
    {
      title: 'Petição Inicial',
      court: 'TJSP',
      date: '24/02/2025',
      description: 'A autora Maria dos Santos alega ter sofrido danos materiais e morais em decorrência de falha na prestação de serviços pelo réu. Requer a inversão do ônus da prova com base no CDC, art. 6º, VIII do...',
      docName: 'Petição Inicial tj...',
      linkText: 'Acessar petição'
    },
    {
      title: 'Recurso Especial',
      court: 'TJSP',
      date: '24/02/2025',
      description: 'A autora interpõe recurso especial ao STJ alegando violação ao art. 6º, VIII, do CDC e divergência jurisprudencial quanto aos critérios de fixação de danos morais. Requer o restabelecimento do val...',
      linkText: 'Acessar recurso especial'
    },
    {
      title: 'Agravo de Instrumento',
      court: 'TJSP',
      date: '24/02/2025',
      description: 'A autora interpõe agravo de instrumento contra decisão que indeferiu pedido de antecipação de tutela para cumprimento imediato do acórdão. Argumenta a presença dos requisitos legais e o risc...',
      docName: 'Agravo de instru...',
    },
    {
      title: 'Acórdão',
      court: 'TJSP',
      date: '24/02/2025',
      description: 'O Tribunal de Justiça de São Paulo reforma parcialmente a sentença, reduzindo o valor da indenização por danos morais. Mantém o reconhecimento da responsabilidade do réu e a aplicaçã...',
      docName: 'Petição Inicial tj...',
      linkText: 'Acessar acórdão'
    },
    {
      title: 'Contrarrazões de Apelação',
      court: 'TJSP',
      date: '24/02/2025',
      description: 'A autora apresenta contrarrazões defendendo a manutenção integral da sentença. Argumenta que todos os requisitos legais foram observados, que a inversão do ônus da prova foi corretamente...',
      linkText: 'Acessar contrarrazões de apelação'
    },
    {
      title: 'Apelação',
      court: 'TJSP',
      date: '24/02/2025',
      description: 'O réu apela da sentença, alegando cerceamento de defesa e violação ao princípio do contraditório. Sustenta que a inversão do ônus da prova foi aplicada de forma equivocada e que não houve...',
      docName: 'Apelação cível tj...',
    }
  ];

  const renderJusIABanner = (
    title = "Entenda o resultado deste caso", 
    description: React.ReactNode = "Descubra os pontos centrais do processo e possíveis desdobramentos.",
    showChip = false,
    chipText = "Novo",
    chipBelowTitle = false,
    buttonText = "Analisar processo"
  ) => {
    const isMantida = chipText === "Mantida";
    
    const chipElement = showChip && (
      <span 
        className="px-3 h-[24px] flex items-center justify-center mb-3"
        style={{
          color: '#007A5F',
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: 'Inter',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '100%',
          borderRadius: isMantida ? '500px' : '9999px',
          border: isMantida ? '1px solid #F3F8ED' : 'none',
          background: isMantida ? '#F3F8ED' : '#EAF6F3'
        }}
      >
        {chipText}
      </span>
    );

    return (
      <div className="flex flex-col items-start pb-[32px] mb-0 w-full border-b border-[#CCD5E1] animate-in fade-in duration-700">
        {!chipBelowTitle && chipElement}
        <h2 className="text-[var(--color-base-low-pure)] font-semibold text-[18px] mb-3 leading-tight">
          {title}
        </h2>
        {chipBelowTitle && chipElement}
        <div className="text-[#5C6F8A] text-[14px] leading-relaxed mb-6">
          {description}
        </div>
        <button 
          onClick={() => setView('chat')}
          className="flex items-center gap-2.5 p-0 m-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-all"
          style={{ height: '24px' }}
        >
          <JusIABannerIcon size={18} />
          <span style={{...buttonTextStyle, color: '#007A5F'}}>{buttonText}</span>
        </button>
      </div>
    );
  };

  const topBarHeight = 40;

  const VariantBar = () => (
    <div className="h-[40px] bg-black text-white flex items-center px-6 justify-between fixed top-0 left-0 right-0 z-[110] font-inter text-[13px]">
      <div className="flex items-center gap-6">
        <button 
          onClick={() => { setVariant('A'); setView('doc'); }}
          className={`hover:opacity-80 transition-opacity font-medium ${variant === 'A' && view === 'doc' ? 'text-[#FFCE00]' : 'text-white'}`}
        >
          Variante A
        </button>
        <button 
          onClick={() => setVariant('B')}
          className={`hover:opacity-80 transition-opacity font-medium ${variant === 'B' ? 'text-[#FFCE00]' : 'text-white'}`}
        >
          Variante B
        </button>
        <button 
          onClick={() => setVariant('C')}
          className={`hover:opacity-80 transition-opacity font-medium ${variant === 'C' ? 'text-[#FFCE00]' : 'text-white'}`}
        >
          Variante C
        </button>
        <button 
          onClick={() => { setVariant('D'); setView('doc'); }}
          className={`hover:opacity-80 transition-opacity font-medium ${variant === 'D' && view === 'doc' ? 'text-[#FFCE00]' : 'text-white'}`}
        >
          Variante D
        </button>
      </div>
      <button 
        onClick={() => setView('chat')}
        className={`hover:opacity-80 transition-opacity font-bold flex items-center gap-2 ${view === 'chat' ? 'text-[#FFCE00]' : 'text-white'}`}
      >
        <JusIAIcon size={14} />
        Jus IA
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter text-[#1D1D1D] selection:bg-[#007A5F]/10">
      <VariantBar />
      <div className={view === 'chat' ? 'h-screen pt-[40px]' : 'pt-[40px]'}>
        {view === 'chat' ? (
          <JusIAView onBack={() => setView('doc')} />
        ) : (
          <>
        <StickyBar 
          isVisible={showStickyBar} 
          topOffset={topBarHeight} 
          activeTab={activeStickyTab}
          onTabClick={handleStickyTabClick}
          activeResumoTab={activeResumoTab}
        />
        
        <header className="bg-white border-b border-[#CCD5E1]">
          <div className="max-w-[980px] mx-auto h-[80px] flex items-center justify-between px-4 lg:px-0">
            <LogoJusbrasil />
            <div className="hidden lg:flex flex-1 max-w-[500px] mx-8 items-center bg-[#F0F4F7] rounded-full h-[44px]">
              <button className="h-full pl-5 pr-3 text-[14px] font-medium text-[#4D525D] flex items-center gap-1.5 whitespace-nowrap">
                Todos <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div className="h-5 w-[1px] bg-[#CCD5E1]"></div>
              <input type="text" placeholder="Pesquisar no Jusbrasil" className="flex-1 bg-transparent border-none py-2 px-5 text-[14px] outline-none placeholder:text-[#5C6F8A]" />
              <button className="p-3 pr-5">
                <SearchIcon />
              </button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-[#FFCE00] flex items-center justify-center text-[#0F172A] text-[13px] font-bold">PO</div>
            </div>
          </div>
        </header>

        <main className="max-w-[980px] mx-auto py-12 px-4 lg:px-0">
          <div className="flex items-center mb-6">
            {variant === 'D' ? (
              <div className="flex items-center w-full">
                <div className="flex items-center gap-3 text-[14px] text-[#5C6F8A]">
                  <button className="flex items-center gap-2 text-[#007A5F] font-bold hover:opacity-80">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Voltar</span>
                  </button>
                  <span className="text-[#CCD5E1]">/</span>
                  <span>Processo n. 1001234-14.2020.5.02.0013</span>
                  <span className="text-[#CCD5E1]">/</span>
                  <span>Jurisprudência</span>
                </div>
                <div className="ml-auto flex items-center gap-6 lg:mr-[352px]">
                   <button className="text-[#2B3950] hover:opacity-70"><BookmarkIcon /></button>
                   <button className="text-[#2B3950] hover:opacity-70"><MoreVerticalIcon /></button>
                </div>
              </div>
            ) : (
              <button 
                className="flex items-center gap-2.5 p-0 m-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-all"
                style={{ height: '24px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#007A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{...buttonTextStyle, color: '#007A5F'}}>Voltar</span>
              </button>
            )}
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Lado Esquerdo */}
            <div className="flex-1 min-w-0 pr-0 lg:pr-[32px] border-r-0 lg:border-r border-[#CCD5E1]">
            {variant !== 'D' && (
              <div className="flex flex-wrap gap-2 mb-3">
                {['2º grau', 'Repercussão geral', 'Decisão de mérito'].map(tag => (
                  <span key={tag} className="inline-flex items-center px-2.5 h-[24px] rounded-[500px] bg-[#F1F5F9] text-[#2B3950] text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-[var(--color-base-low-pure)] font-inter text-[28px] font-semibold leading-[130%] mb-3">
              STJ - AGRAVO INTERNO NO AGRAVO EM RECURSO ESPECIAL: 1799837 SP 2020/0319175-0
            </h1>

            {variant === 'D' && (
              <div className="flex items-start gap-4 py-1 border-l-2 border-[#CBD5E1] pl-4 mb-10 mt-6">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <h2 className="text-[#0F172A] font-bold text-[16px]">Situação recursal</h2>
                    <span className="px-2.5 h-[22px] flex items-center justify-center rounded-full bg-[#F3F8ED] text-[#007A5F] text-[12px] font-medium border border-[#F3F8ED]">
                      Mantida
                    </span>
                  </div>
                  <p className="text-[#334155] text-[15px] leading-relaxed">
                    O tribunal analisou o recurso e manteve a decisão anterior, <span className="underline cursor-pointer">conforme sentença</span>.
                  </p>
                </div>
              </div>
            )}

            {variant !== 'D' && (
              <div className="text-[14px] text-[#475569] mb-6">
                Processo n. <span className="underline text-[#007A5F]">1001234-14.2020.5.02.0013</span>
              </div>
            )}

            <div className="flex flex-nowrap items-center gap-x-4 gap-y-1 text-[14px] text-[#475569] mb-8 overflow-hidden whitespace-nowrap">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[#0F172A] font-bold">TRT2</span>
                <span className="text-[#64748B]">·</span>
                <span>14ª Turma</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[#0F172A] font-bold">Relator</span>
                <span className="text-[#64748B]">·</span>
                <span>Des.(a) Nelson Mis...</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[#0F172A] font-bold">Julgado em</span>
                <span>21/05/2021</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-[#007A5F] font-semibold hover:underline shrink-0"
              >
                Mostrar mais
              </button>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button style={buttonStyle}>
                <div className="flex items-center gap-2">
                  <QuoteIcon />
                  <span style={{...buttonTextStyle, color: 'white'}}>Ementa</span>
                </div>
              </button>
              <button style={secondaryButtonStyle}>
                <div className="flex items-center gap-2">
                  <JurisprudenciaIcon color="#007A5F" />
                  <span style={{...buttonTextStyle, color: '#007A5F'}}>Jurisprudência semelhante</span>
                </div>
              </button>
              {variant === 'C' && (
                <button 
                  style={greyButtonStyle}
                  onClick={() => setView('chat')}
                >
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15.2176 11.1816C15.2863 10.9393 15.6303 10.9394 15.6991 11.1816L15.9325 12.0088C15.9616 12.1119 15.9985 12.2121 16.0428 12.3076C16.073 12.3728 16.1067 12.436 16.1434 12.4971C16.2275 12.6369 16.3287 12.7653 16.4432 12.8799C16.5578 12.9945 16.6862 13.0956 16.826 13.1797C16.8871 13.2164 16.9503 13.2501 17.0155 13.2803C17.111 13.3246 17.2111 13.3615 17.3143 13.3906L18.1414 13.624C18.3837 13.6928 18.3838 14.0368 18.1414 14.1055L17.3143 14.3379C17.2111 14.367 17.111 14.4049 17.0155 14.4492C16.9503 14.4794 16.8871 14.5131 16.826 14.5498C16.6864 14.6338 16.5577 14.7342 16.4432 14.8486C16.3286 14.9632 16.2275 15.0926 16.1434 15.2324C16.1067 15.2935 16.073 15.3567 16.0428 15.4219C15.9985 15.5174 15.9616 15.6175 15.9325 15.7207L15.6991 16.5469C15.6306 16.7897 15.2861 16.7897 15.2176 16.5469L14.9852 15.7207C14.9561 15.6175 14.9182 15.5174 14.8739 15.4219C14.8436 15.3567 14.81 15.2935 14.7733 15.2324C14.6891 15.0926 14.5881 14.9632 14.4735 14.8486C14.359 14.7342 14.2303 14.6339 14.0907 14.5498C14.0296 14.5131 13.9664 14.4794 13.9012 14.4492C13.8057 14.4049 13.7056 14.367 13.6024 14.3379L12.7762 14.1055C12.5334 14.037 12.5334 13.6925 12.7762 13.624L13.6024 13.3906C13.7056 13.3615 13.8057 13.3246 13.9012 13.2803C13.9664 13.2501 14.0296 13.2164 14.0907 13.1797C14.1606 13.1376 14.2279 13.0911 14.2918 13.041L14.9852 12.0088L15.2176 11.1816ZM7.64047 3.41797C7.75463 3.01323 8.32905 3.01323 8.44321 3.41797L9.06821 5.63477C9.47744 7.0857 10.6115 8.22056 12.0623 8.62989L14.2801 9.25489C14.6849 9.36905 14.6849 9.94249 14.2801 10.0566L12.0623 10.6826C10.6115 11.092 9.47743 12.2259 9.06821 13.6768L8.44321 15.8945C8.32905 16.2993 7.75463 16.2993 7.64047 15.8945L7.01547 13.6768C6.60622 12.2258 5.47222 11.0919 4.02133 10.6826L1.80356 10.0566C1.39881 9.94249 1.39881 9.36905 1.80356 9.25489L4.02133 8.62989C5.4723 8.2206 6.60622 7.08575 7.01547 5.63477L7.64047 3.41797ZM8.04184 7.45704C7.5151 8.36991 6.75646 9.1295 5.8436 9.65626C6.75632 10.183 7.51514 10.9418 8.04184 11.8545C8.56851 10.9418 9.32739 10.183 10.2401 9.65626C9.32728 9.1295 8.56855 8.36987 8.04184 7.45704ZM15.2176 2.68262C15.2861 2.43978 15.6306 2.43978 15.6991 2.68262L15.9325 3.5088C15.9616 3.61196 15.9985 3.71209 16.0428 3.80762C16.073 3.87278 16.1067 3.93601 16.1434 3.99708C16.2275 4.13684 16.3287 4.26531 16.4432 4.37989C16.5578 4.49448 16.6862 4.59555 16.826 4.67969C16.8871 4.71644 16.9503 4.75006 17.0155 4.78028C17.111 4.82457 17.2111 4.86153 17.3143 4.89063L18.1414 5.12403C18.3837 5.19279 18.3838 5.53677 18.1414 5.60547L17.3143 5.8379C17.2111 5.867 17.111 5.90494 17.0155 5.94922C16.9503 5.97944 16.8871 6.01307 16.826 6.04981C16.6862 6.13394 16.5578 6.23505 16.4432 6.34962C16.3286 6.4642 16.2275 6.59265 16.1434 6.73243C16.1067 6.79351 16.073 6.85671 16.0428 6.92188C15.9985 7.01742 15.9616 7.11754 15.9325 7.22071L15.6991 8.04688C15.6306 8.28973 15.2861 8.28973 15.2176 8.04688L14.9852 7.22071C14.9561 7.11754 14.9182 7.01742 14.8739 6.92188C14.8436 6.8567 14.81 6.79351 14.7733 6.73243C14.6891 6.59262 14.5881 6.46324 14.4735 6.34864C14.359 6.23422 14.2303 6.13385 14.0907 6.04981C14.0296 6.01306 13.9664 5.97945 13.9012 5.94922C13.8057 5.90494 13.7056 5.867 13.6024 5.8379L12.7762 5.60547C12.5334 5.53698 12.5334 5.19252 12.7762 5.12403L13.6024 4.89063C13.7056 4.86153 13.8057 4.82457 13.9012 4.78028C13.9664 4.75006 14.0296 4.71644 14.0907 4.67969C14.1606 4.6376 14.2279 4.59106 14.2918 4.54102L14.9852 3.5088L15.2176 2.68262Z" fill="#475569"/>
                    </svg>
                    <span style={{...buttonTextStyle, color: '#475569'}}>Analisar processo</span>
                  </div>
                </button>
              )}
            {variant !== 'C' && variant !== 'D' && (
              <div className="ml-auto flex items-center gap-6">
                 <button className="text-[#2B3950] hover:opacity-70"><BookmarkIcon /></button>
                 <button className="text-[#2B3950] hover:opacity-70"><MoreVerticalIcon /></button>
              </div>
            )}
            </div>
            
            <div className="flex items-end self-stretch border-b border-[#CCD5E1] mb-8 justify-between">
              <div className="flex gap-4">
                {['Panorama', 'Histórico', 'Atos processuais', 'Pedidos'].map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveResumoTab(tab)} 
                    className="flex flex-col items-center justify-end min-h-[40px] pb-5 transition-colors relative"
                  >
                    <span className={`px-2 text-[14px] font-semibold whitespace-nowrap ${activeResumoTab === tab ? 'text-[#007A5F]' : 'text-[#2B3950] font-normal'}`}>{tab}</span>
                    {activeResumoTab === tab && <div className="w-full h-[2px] bg-[#007A5F] rounded-t-[6px] absolute bottom-[-1px]" />}
                  </button>
                ))}
              </div>
              {variant === 'B' && (
                <button 
                  onClick={() => setView('chat')}
                  className="flex flex-col items-center justify-end min-h-[40px] pb-5 pr-[9px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <JusIABannerIcon size={18} />
                    <span style={{...buttonTextStyle, color: '#007A5F', lineHeight: '20px'}}>Analisar processo</span>
                  </div>
                </button>
              )}
            </div>

            <section className="mb-12">
              {activeResumoTab === 'Panorama' && (
                <div className="flex flex-col">
                  <div id="ementa">
                    <h2 className="text-[24px] font-semibold mb-4 text-[var(--color-base-low-pure)]">Ementa</h2>
                    <div className="text-[#2B3950] text-justify font-georgia text-[17px] leading-[170%]">
                      <p className="mb-4 font-bold">
                        EMENTA <a href="#" className="text-[#0474E2] underline font-normal">Agravo regimental em habeas corpus</a>. <span className="font-normal">Penal. Latrocínio ( <a href="#" className="text-[#0474E2] underline">CP</a>, art. <a href="#" className="text-[#0474E2] underline">157</a>, § <a href="#" className="text-[#0474E2] underline">3º</a>). Pluralidade de vítimas. Concurso formal impróprio não configurado. Delito praticado com unidade de desígnios. Reconhecimento do concurso formal próprio ( <a href="#" className="text-[#0474E2] underline">CP</a>, art. <a href="#" className="text-[#0474E2] underline">70</a>, <a href="#" className="text-[#0474E2] underline">1ª</a> parte). <a href="#" className="text-[#0474E2] underline">Precedentes</a>. Condenação transitada em julgado. Impetração utilizada como sucedânea de revisão criminal. Possibilidade em hipóteses excepcionais, quando líquidos e incontroversos os fatos postos à apreciação da Corte. <a href="#" className="text-[#0474E2] underline">Precedente da Segunda Turma</a>. Regimental não provido.</span>
                      </p>
                      <p>
                        1. O reconhecimento do concurso formal próprio no delito de latrocínio praticado encontra respaldo jurídico na jurisprudência do Supremo Tribunal segundo a qual “o crime de latrocínio é um delito complexo, cuja unidade não se altera em razão da diversidade de vítimas fatais; há um único latrocínio, não obstante constatadas duas mortes; a pluralidade de vítimas não configura a continuidade delitiva, vez que o crime-fim arquitetado foi o de roubo e não o de duplo latrocínio” ( <a href="#" className="text-[#0474E2] underline">HC nº 71.267/ES</a>, Segunda Turma, Relator o Ministro Maurício Corrêa, DJ de 20/4/95).
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 mb-10 h-[1px] bg-[#CCD5E1] w-full"></div>

                  <div id="inteiro-teor">
                    <h2 className="text-[24px] font-semibold mb-4 text-[var(--color-base-low-pure)]">Inteiro teor</h2>
                    <div className="text-[#2B3950] text-justify font-georgia text-[17px] leading-[170%]">
                      <p className="mb-1">PODER JUDICIÁRIO</p>
                      <p className="mb-1">Tribunal de Justiça do Estado de Goiás</p>
                      <p className="mb-6">Gabinete do Desembargador Alan Sebastião de Sena Conceição</p>
                      
                      <p className="mb-6 font-bold">APELAÇÃO CÍVEL</p>
                      
                      <p className="mb-1">Nº 5675033.70.2019.8.09.0129</p>
                      <p className="mb-6 uppercase">COMARCA DE GOIÂNIA</p>
                      
                      <p className="mb-1">APELANTE : ELCIENE ALVES DE SOUZA</p>
                      <p className="mb-1">APELADAS : PATRÍCIA REZENDE DE SOUZA E OUTRA</p>
                      <p className="mb-6">RELATOR : JOSÉ PROTO DE OLIVEIRA - JUIZ SUBSTITUTO EM 2º GRAU</p>
                      
                      <p className="mb-6 font-bold">VOTO</p>
                      
                      <p className="mb-6">Presentes os pressupostos de admissibilidade do recurso, dele conheço.</p>
                      
                      <p>
                        Como relatado, trata-se de apelação cível interposta contra a sentença (evento 44) proferida nos autos da "Ação de Rescisão de Contrato Cumulada Com Restituição de Importância Pagas e Indenização Por Danos Morais", na qual o magistrado singular julgou parcialmente procedentes os pedidos constantes da peça inaugural, a fim de rescindir o contrato firmado entre as partes e determinar que as requeridas devolvam à autora os valores pagos com a incidência de correção monetária pelo "INPC" a partir do respectivo desembolso e os juros de mora contados da citação.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 mb-10 h-[1px] bg-[#CCD5E1] w-full"></div>

                  <div id="certidao">
                    <h2 className="text-[24px] font-semibold mb-4 text-[var(--color-base-low-pure)]">Certidão de julgamento</h2>
                    <div className="text-[#2B3950] text-justify font-georgia text-[17px] leading-[170%]">
                      <p className="mb-6">Superior Tribunal de Justiça</p>
                      <p className="mb-6 uppercase">Revista Eletrônica de Jurisprudência CERTIDÃO DE JULGAMENTO TERCEIRA TURMA</p>
                      <p className="mb-6">Número Registro: 2016/0110546-4</p>
                      
                      <p className="mb-6">
                        PROCESSO ELETRÔNICO REsp 1.595.145 / RO Números Origem: 00136772820118220001 136772820118220001 41847 RO-41847 PAUTA: 15/12/2016 JULGADO: 15/12/2016 Relatora Exma. Sra. Ministra NANCY ANDRIGHI Presidente da Sessão Exmo. Sr. Ministro MARCO AURÉLIO BELLIZZE Subprocurador-Geral da República Exmo. Sr. Dr. ANTÔNIO CARLOS ALPINO BIGONHA Secretária Bela. MARIA AUXILIADORA RAMALHO DA ROCHA AUTUAÇÃO RECORRENTE : VOA BRASIL VIAGENS E TURISMO EIRELI - ME ADVOGADO : JOSÉ ROBERTO WANDEMBRUCK E OUTRO (S) - RO005063 RECORRIDO : DANIEL RIBEIRO LAGOS RECORRIDO : ARTHUR PASINI RADUAN MIGUEL (MENOR) RECORRIDO : OLIVIA PASINI RADUAN MIGUEL (MENOR) REPR. POR : ALEXANDRE MIGUEL - POR SI E REPRESENTANDO RECORRIDO : LIGIA PASINI MIGUEL RECORRIDO : RADUAN MIGUEL FILHO RECORRIDO : RENATA KRIEGER ARIOLI RECORRIDO : FABIO MESTRINER RECORRIDO : CARLA PEREIRA MARTINS MESTRINER ADVOGADOS : HIRAN SALDANHA DE MACEDO CASTIEL E OUTRO (S) - RO004235 RAFAEL VALENTIN RADUAN MIGUEL - RO004486 ASSUNTO: DIREITO DO CONSUMIDOR - Responsabilidade do Fornecedor - Indenização por Dano Material CERTIDÃO Certifico que a egrégia TERCEIRA TURMA, ao apreciar o processo em epígrafe na sessão realizada nesta data, proferiu a seguinte decisão: A Turma, por unanimidade, conheceu do recurso especial e deu-lhe provimento, nos termos do voto do (a) Sr (a). Ministro (a) Relator (a). Os Srs. Ministros Paulo de Tarso Sanseverino, Ricardo Villas Bôas Cueva, Marco Aurélio Bellizze (Presidente) e Moura Ribeiro votaram com a Sra. Ministra Relatora.
                      </p>
                      
                      <p className="text-[#2B3950]/40 uppercase">
                        Documento: 68221786 CERTIDÃO DE JULGAMENTO
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 mb-10 h-[1px] bg-[#CCD5E1] w-full"></div>

                  <div id="relatorio">
                    <h2 className="text-[24px] font-semibold mb-4 text-[var(--color-base-low-pure)]">Relatório e voto</h2>
                    <div className="text-[#2B3950] text-justify font-georgia text-[17px] leading-[170%]">
                      <p className="mb-6">Superior Tribunal de Justiça</p>
                      <p className="mb-6 uppercase">Revista Eletrônica de Jurisprudência RECURSO ESPECIAL Nº 1.595.145 - RO (2016/0110546-4)</p>
                      <p className="mb-6 uppercase">RELATORA : MINISTRA NANCY ANDRIGHI RECORRENTE : VOA BRASIL VIAGENS E TURISMO EIRELI - ME ADVOGADO : JOSÉ ROBERTO WANDEMBRUCK E OUTRO (S) - RO005063 RECORRIDO : DANIEL RIBEIRO LAGOS RECORRIDO : ARTHUR PASINI RADUAN MIGUEL (MENOR) RECORRIDO : OLIVIA PASINI RADUAN MIGUEL (MENOR) REPR. POR : ALEXANDRE MIGUEL - POR SI E REPRESENTANDO RECORRIDO : LIGIA PASINI MIGUEL RECORRIDO : RADUAN MIGUEL FILHO RECORRIDO : RENATA KRIEGER ARIOLI RECORRIDO : FABIO MESTRINER RECORRIDO : CARLA PEREIRA MARTINS MESTRINER ADVOGADOS : HIRAN SALDANHA DE MACEDO CASTIEL E OUTRO (S) - RO004235 RAFAEL VALENTIN RADUAN MIGUEL - RO004486 RELATÓRIO A EXMA. SRA. MINISTRA NANCY ANDRIGHI (Relator):</p>
                      
                      <p className="mb-6">
                        Cuida-se de recurso especial interposto por VOA BRASIL VIAGENS E TURISMO LTDA., com fundamento na alínea a do permissivo constitucional, contra acórdão exarado pelo TJ/RO.
                      </p>
                      
                      <p className="mb-6">
                        Ação: de reparação por danos morais, em razão do cancelamento do voo para Cuzco a três dias da data agendada para a viagem adquirida pela recorrida à mencionada cidade e a Machu Picchu, no Peru, conforme um pacote turístico oferecido pela recorrente.
                      </p>
                      
                      <p className="mb-6">
                        Sentença: após indeferir a produção de prova testemunhal, por entender que matéria é unicamente de direito, julgou procedente o pedido para condenar a recorrente a pagar o valor de R$ 5.000,00 (cinco mil reais) a cada recorrida, a título de indenização por danos morais. Fixou,
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeResumoTab === 'Histórico' && (
                <div className="text-[#2B3950] text-[16px] leading-[1.6]">
                  <h2 className="text-[24px] font-semibold mb-6 text-[var(--color-base-low-pure)]">Histórico do processo</h2>
                  
                  {/* Fatos Section */}
                  <div className="mb-8">
                    <h3 className="text-[16px] font-bold text-[#0F172A] mb-3">Fatos</h3>
                    <p className="text-[#475569] text-[14px] leading-relaxed mb-3">
                      O Tribunal reconheceu a falha na prestação do serviço e classificou o evento como fortuito interno, inerente ao risco da atividade. O dano moral foi considerado in re ipsa, presumido pela situação de desgaste e desrespeito ao consumidor. O valor foi fixado em atenção aos princípios da razoabilidade e {isHistoricoExpanded ? 'proporcionalidade.' : 'proporcionalida...'}
                    </p>
                    {!isHistoricoExpanded && (
                      <button 
                        onClick={() => setIsHistoricoExpanded(true)}
                        className="flex items-center gap-1.5 text-[#007A5F] text-[14px] font-semibold hover:underline"
                      >
                        Mostrar mais
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </button>
                    )}
                  </div>

                  {isHistoricoExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-8"
                    >
                      <h3 className="text-[16px] font-bold text-[#0F172A] mb-3">Teses</h3>
                      <div className="space-y-6">
                        <p className="text-[#475569] text-[14px] leading-relaxed">
                          1. A obrigação de ressarcimento de danos morais é configurada quando a conduta das apeladas, ao não efetuarem o pagamento dos honorários do médico responsável pela cirurgia, expõe a apelante a situação vexatória e constrangedora, atingindo seus direitos de personalidade, resultando em uma indenização fixada em R$ 5.000,00.
                        </p>
                        <p className="text-[#475569] text-[14px] leading-relaxed">
                          2. Os juros moratórios sobre a indenização por danos morais decorrente de dano extracontratual incidem a partir do evento danoso, conforme a súmula 54 do STJ, enquanto a correção monetária deve incidir a partir do arbitramento da indenização, conforme a súmula 362 do STJ.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <div className="mt-2 mb-10 h-[1px] bg-[#E2E8F0] w-full"></div>

                  {/* Linha do Tempo Section */}
                  <div>
                    <h3 className="text-[20px] font-bold text-[#0F172A] mb-8">Linha do tempo</h3>
                    
                    <div className="relative pl-8">
                      {/* Vertical Line */}
                      <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-[#E2E8F0]"></div>

                      {/* Timeline Item 1 */}
                      <div className="relative mb-12">
                        <div className="absolute left-[-32px] top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#007A5F] bg-white z-10"></div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[16px] font-bold text-[#0F172A]">17/04/2024</span>
                          <span className="text-[#64748B] text-[14px]">| há 1 mês</span>
                        </div>
                        
                        <div className="relative pl-4">
                          <div className="absolute left-[-24.5px] top-2.5 w-[6px] h-[6px] rounded-full bg-[#64748B] z-10"></div>
                          <h4 className="text-[15px] font-bold text-[#0F172A] mb-1">Publicação</h4>
                          <p className="text-[#475569] text-[14px] mb-3">Proferido despacho de mero expediente</p>
                          <button className="flex items-center gap-2 text-[#007A5F] text-[14px] font-bold hover:underline">
                            <SparkleIcon />
                            Entender
                          </button>
                        </div>
                      </div>

                      {/* Timeline Item 2 */}
                      <div className="relative mb-12">
                        <div className="absolute left-[-32px] top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#007A5F] bg-white z-10"></div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[16px] font-bold text-[#0F172A]">17/12/2020</span>
                          <span className="text-[#64748B] text-[14px]">| há 4 anos</span>
                        </div>
                        
                        <div className="relative pl-4">
                          <div className="absolute left-[-24.5px] top-2.5 w-[6px] h-[6px] rounded-full bg-[#64748B] z-10"></div>
                          <h4 className="text-[15px] font-bold text-[#0F172A] mb-1">Andamento</h4>
                          <p className="text-[#475569] text-[14px] leading-relaxed mb-4">
                            Nota Finalizada / Encaminhada para publicação<br/>
                            Relação: 0278/2021<br/>
                            Teor do ato: Indefiro a produção de prova deponencial/testemunhal para esclarecimento do negócio entabulado entre as partes, uma vez que no caso em tela basta analisar a prova documental acostada pelas partes. Ressalto ainda, com fulcro no art. 371, do CPC, em sendo o juiz o destinatário final das provas, os depoimentos requeridos em nada acrescentariam na elucidação dos fatos. Voltem-me os autos conclusos para sentença.
                          </p>
                          <button className="flex items-center gap-2 text-[#007A5F] text-[14px] font-bold hover:underline mb-6">
                            <SparkleIcon />
                            Entender
                          </button>

                          {/* Documents Row */}
                          <div className="flex flex-wrap gap-3 items-center">
                            <div className="flex-1 min-w-[240px] border border-[#E2E8F0] rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
                              <div className="flex items-center gap-3">
                                <DocumentRedIcon />
                                <div className="flex flex-col">
                                  <span className="text-[13px] font-bold text-[#0F172A]">Certidão de publicaçã...</span>
                                  <span className="text-[11px] text-[#64748B]">08/11/2020</span>
                                </div>
                              </div>
                              <DownloadGrayIcon />
                            </div>
                            <div className="flex-1 min-w-[240px] border border-[#E2E8F0] rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
                              <div className="flex items-center gap-3">
                                <DocumentRedIcon />
                                <div className="flex flex-col">
                                  <span className="text-[13px] font-bold text-[#0F172A]">Ato oratório</span>
                                  <span className="text-[11px] text-[#64748B]">27/10/2020</span>
                                </div>
                              </div>
                              <DownloadGrayIcon />
                            </div>
                            <button className="flex items-center gap-1 text-[#007A5F] text-[14px] font-bold hover:underline ml-2">
                              Mostrar mais
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item 3 */}
                      <div className="relative mb-12">
                        <div className="absolute left-[-32px] top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#007A5F] bg-white z-10"></div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[16px] font-bold text-[#0F172A]">04/05/2020</span>
                          <span className="text-[#64748B] text-[14px]">| há 4 anos</span>
                        </div>
                        
                        <div className="space-y-8">
                          <div className="relative pl-4">
                            <div className="absolute left-[-24.5px] top-2.5 w-[6px] h-[6px] rounded-full bg-[#64748B] z-10"></div>
                            <h4 className="text-[15px] font-bold text-[#0F172A] mb-1">Andamento</h4>
                            <p className="text-[#475569] text-[14px] mb-3">Proferido despacho de mero expediente</p>
                            <button className="flex items-center gap-2 text-[#007A5F] text-[14px] font-bold hover:underline">
                              <SparkleIcon />
                              Entender
                            </button>
                          </div>

                          <div className="relative pl-4">
                            <div className="absolute left-[-24.5px] top-2.5 w-[6px] h-[6px] rounded-full bg-[#64748B] z-10"></div>
                            <h4 className="text-[15px] font-bold text-[#0F172A] mb-3">Documento</h4>
                            <div className="max-w-[280px] border border-[#E2E8F0] rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
                              <div className="flex items-center gap-3">
                                <DocumentRedIcon />
                                <span className="text-[13px] font-bold text-[#0F172A]">Certidão de publ...</span>
                              </div>
                              <DownloadGrayIcon />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item 4 */}
                      <div className="relative mb-8">
                        <div className="absolute left-[-32px] top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#007A5F] bg-white z-10"></div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[16px] font-bold text-[#0F172A]">28/02/2020</span>
                          <span className="text-[#64748B] text-[14px]">| há 4 anos</span>
                        </div>
                        
                        <div className="relative pl-4">
                          <div className="absolute left-[-24.5px] top-2.5 w-[6px] h-[6px] rounded-full bg-[#64748B] z-10"></div>
                          <h4 className="text-[15px] font-bold text-[#0F172A] mb-1">Andamento</h4>
                          <p className="text-[#475569] text-[14px] mb-3">Proferido despacho de mero expediente</p>
                          <button className="flex items-center gap-2 text-[#007A5F] text-[14px] font-bold hover:underline">
                            <SparkleIcon />
                            Entender
                          </button>
                        </div>
                      </div>
                    </div>

                    <button className="w-full h-[48px] border border-[#E2E8F0] rounded-lg text-[#0F172A] text-[14px] font-bold hover:bg-gray-50 transition-colors mt-4">
                      Mostrar mais
                    </button>
                  </div>
                </div>
              )}

              {activeResumoTab === 'Atos processuais' && (
                <div className="flex flex-col w-full">
                  <h2 className="text-[24px] font-semibold mb-6 text-[var(--color-base-low-pure)]">Atos processuais</h2>
                  
                  {processDocuments.map((doc, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[#0F172A] font-bold text-[16px]">{doc.title}</span>
                          <span className="text-[#64748B] text-[16px]">•</span>
                          <span className="text-[#64748B] text-[14px]">{doc.court}</span>
                          <span className="text-[#64748B] text-[16px]">•</span>
                          <span className="text-[#64748B] text-[14px]">Juntada ao processo em {doc.date}</span>
                        </div>
                        
                        <p className="text-[#475569] text-[14px] leading-relaxed mb-6">
                          {doc.description}
                        </p>

                        <div className="flex items-center gap-4">
                          {doc.docName && (
                            <div className="border border-[#E2E8F0] rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors min-w-[240px]">
                              <div className="flex items-center gap-3">
                                <DocumentRedIcon />
                                <span className="text-[13px] font-bold text-[#0F172A]">{doc.docName}</span>
                              </div>
                              <DownloadGrayIcon />
                            </div>
                          )}
                          
                          {doc.linkText && (
                            <button className="flex items-center gap-2 text-[#007A5F] text-[14px] font-bold hover:underline">
                              {doc.linkText}
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {index < processDocuments.length - 1 && (
                        <div className="mt-10 mb-10 h-[1px] bg-[#E2E8F0] w-full"></div>
                      )}
                    </React.Fragment>
                  ))}

                  <button className="w-full h-[48px] border border-[#E2E8F0] rounded-lg text-[#0F172A] text-[14px] font-bold hover:bg-gray-50 transition-colors mt-10">
                    Mostrar mais
                  </button>
                </div>
              )}

              {activeResumoTab === 'Pedidos' && (
                <div className="flex flex-col w-full">
                  <div className="mb-10 pb-10 border-b border-[#E2E8F0]">
                    <h2 className="text-[24px] font-semibold mb-4 text-[var(--color-base-low-pure)]">Resultado do julgamento</h2>
                    <div className="text-[#475569] text-[16px] leading-[1.6] mb-4 space-y-4">
                      <p>
                        O Tribunal reconheceu a falha na prestação do serviço e classificou o evento como fortuito interno, inerente ao risco da atividade. O dano moral foi considerado in re ipsa, presumido pela situação de desgaste e desrespeito ao consumidor. O valor foi fixado em atenção aos princípios da razoabilidade e {isPedidosExpanded ? 'proporcionalidade.' : 'proporcionalida...'}
                      </p>
                      {isPedidosExpanded && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-2"
                        >
                          Além disso, o Tribunal destacou que a responsabilidade do fornecedor decorre da teoria do risco da atividade, sendo irrelevante a demonstração de culpa quando comprovada a falha na prestação do serviço. Nesse contexto, entendeu-se que a conduta da parte ré ultrapassou o mero aborrecimento cotidiano, atingindo a esfera de dignidade do consumidor e justificando a reparação por danos morais.
                        </motion.p>
                      )}
                    </div>
                    {!isPedidosExpanded && (
                      <button 
                        onClick={() => setIsPedidosExpanded(true)}
                        className="text-[#007A5F] text-[14px] font-bold flex items-center gap-1 hover:underline"
                      >
                        Mostrar mais
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"/></svg>
                      </button>
                    )}
                  </div>

                  <h2 className="text-[24px] font-semibold mb-6 text-[var(--color-base-low-pure)]">Pedidos (8)</h2>
                  
                  <div className="flex gap-3 mb-8">
                    <button className="px-4 h-[36px] flex items-center text-[14px] font-semibold rounded-full border border-[#CCD5E1] text-[#2B3950] hover:bg-gray-50 transition-colors">
                      Todas as partes
                    </button>
                    <button className="px-4 h-[36px] flex items-center text-[14px] font-semibold rounded-full border border-[#CCD5E1] text-[#2B3950] hover:bg-gray-50 transition-colors">
                      Resultado do pedido
                    </button>
                  </div>
                  
                  {[
                    {
                      title: 'Indenização por danos materiais',
                      party: 'Parte autora',
                      status: 'Acolhido',
                      statusColor: 'bg-[#ECFDF5] text-[#065F46]',
                      description: 'O juízo reconheceu as despesas comprovadas com alimentação e transporte, condenando a ré ao pagamento integral de R$ 2.350,00.',
                      reasons: 'As despesas apresentadas foram comprovadas documentalmente e possuem relação direta com o fato discutido no processo.',
                      fundamento: 'O juízo reconheceu as despesas comprovadas com alimentação e transporte, condenando a ré ao pagamento integral de R$ 2.350,00.'
                    },
                    {
                      title: 'Dano moral no valor de R$ 50.000,00',
                      party: 'Parte autora',
                      status: 'Parcialmente acolhido',
                      statusColor: 'bg-[#FFFBEB] text-[#92400E]',
                      description: 'O autor requereu indenização por prejuízos materiais decorrentes do evento, porém parte dos valores pleiteados não foi devidamente comprovada.',
                      reasons: 'Apenas parte das despesas apresentadas possui comprovação suficiente para justificar a reparação integral.',
                      fundamento: 'O juízo reconheceu parcialmente as despesas comprovadas, limitando a indenização aos valores efetivamente demonstrados nos autos.'
                    }
                  ].map((pedido, index, array) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col">
                        <h3 className="text-[#0F172A] font-bold text-[18px] mb-2">{pedido.title}</h3>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[#64748B] text-[14px]">{pedido.party}</span>
                          <span className="text-[#64748B] text-[14px]">•</span>
                          <span className={`px-2 py-0.5 rounded-full text-[12px] font-medium ${pedido.statusColor}`}>
                            {pedido.status}
                          </span>
                        </div>
                        
                        <p className="text-[#475569] text-[16px] leading-relaxed mb-4">
                          {pedido.description}
                        </p>

                        <h4 className="text-[#0F172A] font-bold text-[16px] mb-2">Razões de decidir</h4>
                        <p className="text-[#475569] text-[16px] leading-relaxed mb-4">
                          {pedido.reasons}
                        </p>
                        
                        <div className="pl-4 border-l-2 border-[#E2E8F0] py-1">
                          <p className="text-[#475569] text-[16px] leading-relaxed">
                            <span className="font-bold text-[#0F172A]">Fundamento:</span> {pedido.fundamento}
                          </p>
                        </div>
                      </div>
                      
                      {index < array.length - 1 && (
                        <div className="mt-10 mb-10 h-[1px] bg-[#E2E8F0] w-full"></div>
                      )}
                    </React.Fragment>
                  ))}

                  <button className="w-full h-[48px] border border-[#E2E8F0] rounded-lg text-[#0F172A] text-[14px] font-bold hover:bg-gray-50 transition-colors mt-10">
                    Mostrar mais
                  </button>
                </div>
              )}
            </section>

          </div>

          {/* Lado Direito */}
          <div className="w-full lg:w-[320px] shrink-0 pl-0 lg:pl-[24px] mt-12 lg:mt-0">
            <div className="flex flex-col items-start self-stretch">
              
              {(variant === 'A' || variant === 'D') && (
                <div className="mb-0 w-full">
                  {renderJusIABanner()}
                  {variant === 'D' && (
                    <div className="mt-8">
                      {renderJusIABanner(
                        "Como este tribunal decide casos parecidos",
                        "Veja tendências em decisões semelhantes e quais argumentos costumam prevalecer.",
                        false,
                        "Novo",
                        false,
                        "Entender padrão de decisões"
                      )}
                    </div>
                  )}
                </div>
              )}

              {variant !== 'D' && (
                <div className={`${variant === 'B' || variant === 'C' ? 'mt-0' : 'mt-8'} w-full`}>
                  {renderJusIABanner(
                    "Situação recursal", 
                    <>O tribunal analisou o recurso e manteve a decisão anterior. Conforme <span className="underline">sentença</span>.</>,
                    true,
                    "Mantida",
                    true,
                    "Entender os fundamentos"
                  )}
                </div>
              )}

              <h2 className="text-[var(--color-base-low-pure)] font-semibold text-[18px] mt-8 mb-5">Documentos anexos</h2>
              <div className="space-y-3 self-stretch mb-10">
                <div className="border border-[#CCD5E1] rounded-lg p-4 flex items-center justify-between group cursor-pointer hover:bg-[#F8FAFC] transition-all bg-white">
                  <div className="flex items-center gap-3">
                    <DocumentRedIcon />
                    <div className="flex flex-col">
                      <span className="text-[#0F172A] font-semibold text-[13px]">Inteiro teor</span>
                      <span className="text-[#5C6F8A] text-[11px]">PDF - 4.2 MB</span>
                    </div>
                  </div>
                  <div className="text-[#455468]">
                    <DownloadGrayIcon />
                  </div>
                </div>
                
                <div className="border border-[#CCD5E1] rounded-lg p-4 flex items-center justify-between group cursor-pointer hover:bg-[#F8FAFC] transition-all bg-white">
                  <div className="flex items-center gap-3">
                    <DocumentRedIcon />
                    <div className="flex flex-col">
                      <span className="text-[#0F172A] font-semibold text-[13px]">Petição inicial</span>
                      <span className="text-[#5C6F8A] text-[11px]">PDF - 1.8 MB</span>
                    </div>
                  </div>
                  <div className="text-[#455468]">
                    <DownloadGrayIcon />
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#CCD5E1] mb-8"></div>

              <div className="flex flex-col self-stretch">
                <h6 className="text-[var(--color-base-low-pure)] font-semibold text-[14px] mb-2 leading-[170%]">De onde vêm as informações do Jusbrasil?</h6>
                <p className="text-[#5C6F8A] text-[12px] font-normal leading-[130%]">
                  Todas as informações exibidas neste documento foram coletadas dos Sistemas dos Tribunais e dos Diários Oficiais. Eventuais anonimizações e/ou exclusões de dados pessoais poderão ser realizadas como salvaguardas e em respeito aos direitos do titular dos dados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

        <footer className="bg-[#F9F9F9] border-t border-[#CCD5E1] py-12 mt-12">
          <div className="max-w-[980px] mx-auto flex justify-between items-center px-4">
            <LogoJusbrasil />
            <div className="text-[12px] text-[#5C6F8A]">© 2024 Jusbrasil. Todos os direitos reservados.</div>
          </div>
        </footer>
        
        <AnimatePresence>
          {isModalOpen && (
            <DetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          )}
        </AnimatePresence>
          </>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; } 
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .font-georgia { font-family: Georgia, serif; }

        @keyframes glow-pulse {
          0% { border-color: rgba(0, 122, 95, 0.4); box-shadow: 0 0 0 0 rgba(0, 122, 95, 0.2); }
          50% { border-color: rgba(0, 122, 95, 1); box-shadow: 0 0 15px 4px rgba(0, 122, 95, 0.3); }
          100% { border-color: rgba(0, 122, 95, 0.4); box-shadow: 0 0 0 0 rgba(0, 122, 95, 0.2); }
        }
        .animate-glow {
          animation: glow-pulse 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;