import { apiClient } from '@/services/shared/infrastructure/api-client';

export const reportingService = {
  async list(path: string) {
    return apiClient.get(path);
  },
};
