/**
 * Composition root — wires shared auth/idempotency stores for the API server.
 */

import { createAdapterDynamoClient } from './dynamo-client.js';
import {
  inMemoryApiKeyLookup,
  inMemoryIdempotencyStore,
  seedApiKey,
} from '@fedbounty/adapters';
import {
  setApiKeyLookup,
  setIdempotencyStore,
} from '../lib/middleware/security-middleware.js';

export async function bootstrapInfrastructure(): Promise<void> {
  setApiKeyLookup(inMemoryApiKeyLookup);
  setIdempotencyStore(inMemoryIdempotencyStore);

  const seedTenant = process.env.SEED_TENANT_ID ?? 'tnt_demo';
  seedApiKey('fedbounty_demo_local_dev_key', {
    keyId: 'key_demo_local_dev',
    tenantId: seedTenant,
    scopes: [
      'identity:read',
      'identity:write',
      'bounties:read',
      'bounties:write',
      'submissions:read',
      'submissions:write',
      'validations:read',
      'validations:write',
      'rewards:read',
      'rewards:write',
      'lineage:read',
      'lineage:write',
      'reporting:read',
      'reporting:write',
    ],
  });

  const seedKey = process.env.SEED_API_KEY;
  if (seedKey && seedKey !== 'fedbounty_demo_local_dev_key') {
    seedApiKey(seedKey, {
      keyId: 'key_01HZYXK8J0M0W5N6P7Q8R9S0T1U2',
      tenantId: seedTenant,
      scopes: [
        'identity:read',
        'identity:write',
        'bounties:read',
        'bounties:write',
        'submissions:read',
        'submissions:write',
        'validations:read',
        'validations:write',
        'rewards:read',
        'rewards:write',
        'lineage:read',
        'lineage:write',
        'reporting:read',
        'reporting:write',
      ],
    });
  }

  if (process.env.TABLE_NAME || process.env.AWS_ENDPOINT_URL) {
    createAdapterDynamoClient();
  }
}

export { createAdapterDynamoClient };
