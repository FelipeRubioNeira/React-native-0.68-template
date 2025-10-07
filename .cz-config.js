module.exports = {
  types: [
    { value: 'FEAT', name: '[FEAT]:     Una nueva característica' },
    { value: 'FIX', name: '[FIX]:      Una nueva corrección' },
    { value: 'DOCS', name: '[DOCS]:     Cambios solo en la documentación' },
    {
      value: 'STYLE',
      name: '[STYLE]:    Cambios que no afectan el significado del código\n            (espacios en blanco, formato, falta de punto y coma, etc)',
    },
    {
      value: 'REFACTOR',
      name: '[REFACTOR]: Un cambio de código que no corrige un error ni agrega una característica',
    },
    {
      value: 'PERF',
      name: '[PERF]:     Un cambio de código que mejora el rendimiento',
    },
    { value: 'TEST', name: '[TEST]:     Agregar pruebas faltantes' },
    {
      value: 'CHORE',
      name: '[CHORE]:    Cambios en el proceso de construcción o herramientas auxiliares\n            y bibliotecas como la generación de documentación',
    },
    { value: 'REVERT', name: '[REVERT]:   Revertir un commit' },
    { value: 'WIP', name: '[WIP]:      Trabajo en progreso' },
  ],

  allowTicketNumber: true,
  isTicketNumberRequired: true,
  ticketNumberPrefix: '',
  ticketNumberRegExp: '\\d{1,5}',

  formatCommitMessage: function (answers) {
    const { type, ticketNumber, subject, body } = answers;

    // Aplicar Single Responsibility: cada línea tiene un propósito específico
    const formattedTicket = ticketNumber ? `[EAS - ${ticketNumber}]` : '';
    const titleLine = `[${type}] ${formattedTicket} - ${subject}`;

    if (body) {
      return `${titleLine}\n${body}`;
    }

    return titleLine;
  },

  // override the messages, defaults are as follows
  messages: {
    type: 'Selecciona el tipo de cambio que estás confirmando:',
    subject: 'Escribe una descripción CORTA del cambio:\n',
    body: 'Proporciona una descripción MÁS LARGA del cambio (opcional). Usa "|" para saltar a una nueva línea:\n',
    breaking: 'Enumera cualquier CAMBIO RUPTURA (opcional):\n',
    confirmCommit: '¿Estás seguro de que deseas continuar con el commit anterior?',
    ticketNumber: 'Ingresa el número del ticket [EAS] (solo números):',
  },

  // Configuración de scopes deshabilitada
  skipQuestions: ['scope', 'footer'],
  allowCustomScopes: false,
  allowBreakingChanges: ['FEAT', 'FIX'],
  subjectLimit: 100,
};
