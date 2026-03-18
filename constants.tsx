
import { RelatedItem } from './types';

export const COLORS = {
  primary: '#007A5F', // Jusbrasil Green
  primaryHover: '#00664F',
  secondary: '#0052CC', // Links/Blue
  neutral900: '#1D1D1D',
  neutral700: '#4A4A4A',
  neutral500: '#8A8A8A',
  neutral200: '#E5E5E5',
  neutral50: '#FAFAFA',
};

export const MOCK_RELATED_ITEMS: RelatedItem[] = [
  {
    id: '1',
    title: 'Superior Tribunal de Justiça STJ - RECURSO ORDINÁRIO EM HABEAS CORPUS: RHC 79243 MG 2016/0318704-2',
    category: 'Jurisprudência',
    type: 'Acórdão',
    date: '24/02/2017',
    preview: 'Ementa PENAL E PROCESSO PENAL. RECURSO EM HABEAS CORPUS. 1. JUIZADO ESPECIAL CRIMINAL. AUSÊNCIA DE CITAÇÃO. NÃO OCORRÊNCIA. REVELIA DECRETADA. OBSERVÂNCIA DA LEI N. 9.099/1995. CONSTRANGIMENTO ILEGAL NÃO EVIDENCIADO.'
  },
  {
    id: '2',
    title: 'Tribunal de Justiça de São Paulo TJ-SP - Apelação Cível: AC 1000234-56.2020.8.26.0100 SP',
    category: 'Jurisprudência',
    type: 'Acórdão',
    date: '15/05/2021',
    preview: 'CIVIL E PROCESSUAL CIVIL. CONTRATOS. INDENIZAÇÃO POR DANOS MORAIS E MATERIAIS. FALHA NA PRESTAÇÃO DO SERVIÇO. RESPONSABILIDADE OBJETIVA. APLICABILIDADE DO CÓDIGO DE DEFESA DO CONSUMIDOR.'
  },
  {
    id: '3',
    title: 'Supremo Tribunal Federal STF - HABEAS CORPUS: HC 123456 RJ',
    category: 'Jurisprudência',
    type: 'Decisão Monocrática',
    date: '10/12/2022',
    preview: 'CONSTITUCIONAL. HABEAS CORPUS. TRÁFICO DE DROGAS. PRISÃO PREVENTIVA. FUNDAMENTAÇÃO IDÔNEA. GARANTIA DA ORDEM PÚBLICA E APLICAÇÃO DA LEI PENAL. MANUTENÇÃO DA CUSTÓDIA CAUTELAR.'
  },
  {
    id: '4',
    title: 'Superior Tribunal de Justiça STJ - AGRAVO EM RECURSO ESPECIAL: AREsp 1552341 SP',
    category: 'Jurisprudência',
    type: 'Decisão Monocrática',
    date: '18/09/2019',
    preview: 'PROCESSUAL CIVIL. AGRAVO EM RECURSO ESPECIAL. INTEMPESTIVIDADE. AUSÊNCIA DE COMPROVAÇÃO DE FERIADO LOCAL NO ATO DA INTERPOSIÇÃO DO RECURSO. NÃO CONHECIMENTO.'
  }
];
