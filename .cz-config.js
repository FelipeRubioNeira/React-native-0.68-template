module.exports = {
  types: [
    { value: 'feature', name: 'feature: Nueva funcionalidad' },
    { value: 'bugfix', name: 'bugfix: Corrección de error' },
    { value: 'docs', name: 'docs: Cambios en la documentación' },
    { value: 'style', name: 'style: Cambios de formato (espacios, comas, etc.)' },
    { value: 'refactor', name: 'refactor: Refactorización de código' },
    { value: 'perf', name: 'perf: Mejoras de rendimiento' },
    { value: 'test', name: 'test: Añadir o corregir tests' },
    // ...otros tipos
  ],
  messages: {
    type: 'Selecciona el tipo de commit:',
    ticket: 'Escribe el número de ticket:',
    subject: 'Descripción breve:',
    // (Puedes traducir todos los mensajes)
  },
  // Añade tu prompt personalizado
  allowCustomScopes: true,
  allowBreakingChanges: ['feature', 'bugfix'],
  subjectLimit: 100,
  // Customiza el formato del mensaje
  format: '[{{type}}][{{ticket}}] - {{subject}}',
  // Prompts personalizados
  questions: ['type', 'ticket', 'subject'],
};
