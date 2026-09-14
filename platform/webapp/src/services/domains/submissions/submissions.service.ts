import { apiClient } from '@/services/shared/infrastructure/api-client';

export const submissionsService = {
  async list(path: string) {
    return apiClient.get(path);
  },
};
