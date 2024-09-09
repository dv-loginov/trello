import { ACTION, AuditLog } from '@prisma/client';

export const generateLogMessage = (auditLog: AuditLog) => {
  const { action, entityTitle, entityType } = auditLog;

  switch (action) {
    case ACTION.CREATE:
      return `создание ${entityType.toLowerCase()}: "${entityTitle}"`;
    case ACTION.UPDATE:
      return `обновление ${entityType.toLowerCase()}: "${entityTitle}"`;
    case ACTION.DELETE:
      return `удаление ${entityType.toLowerCase()}: "${entityTitle}"`;
    default:
      return `неизвестное действие ${entityType.toLowerCase()}: "${entityTitle}"`;
  }
};
