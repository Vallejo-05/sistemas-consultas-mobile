import { Consulta, Especialidade } from "../types";
import { Medico } from "../interfaces/medico";

/** Médicos disponíveis no sistema (agendamento + login de teste) */
export const medicosMock: Medico[] = [
  {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM/SP 123456",
    especialidade: "Cardiologia",
    ativo: true,
  },
  {
    id: 2,
    nome: "Dra. Maria Santos",
    crm: "CRM/SP 234567",
    especialidade: "Dermatologia",
    ativo: true,
  },
  {
    id: 3,
    nome: "Dr. João Pereira",
    crm: "CRM/SP 345678",
    especialidade: "Ortopedia",
    ativo: true,
  },
  {
    id: 4,
    nome: "Dra. Ana Costa",
    crm: "CRM/SP 456789",
    especialidade: "Clínica Geral",
    ativo: true,
  },
  {
    id: 5,
    nome: "Dr. Paulo Oliveira",
    crm: "CRM/SP 567890",
    especialidade: "Psiquiatria",
    ativo: true,
  },
  {
    id: 6,
    nome: "Dra. Carla Lima",
    crm: "CRM/SP 678901",
    especialidade: "Pediatria",
    ativo: true,
  },
];

/** Lista enxuta para selects (id, nome, especialidade) */
export const medicosSelectMock = medicosMock.map((m) => ({
  id: m.id,
  nome: m.nome,
  especialidade: m.especialidade as Especialidade,
}));
