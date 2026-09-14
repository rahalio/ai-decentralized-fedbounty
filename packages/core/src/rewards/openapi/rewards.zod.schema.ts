import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const PayoutStatus = z.enum(['pending', 'paid', 'failed', 'zero']);
const RewardPayout = z
  .object({
    payoutId: z.string().regex(/^rwd_[0-9A-HJKMNP-TV-Z]{26}$/),
    evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    workerId: z
      .string()
      .regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    amount: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    holdoutImprovementPercent: z.number().optional(),
    modelCid: z.string().min(8).max(128).optional(),
    status: z.enum(['pending', 'paid', 'failed', 'zero']),
    createdAt: z.string().datetime({ offset: true }),
    settledAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const RewardPayoutRequest = z
  .object({ evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/) })
  .passthrough();
const RewardPayoutResponse = z
  .object({
    data: z
      .object({
        payoutId: z.string().regex(/^rwd_[0-9A-HJKMNP-TV-Z]{26}$/),
        evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
        bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
        workerId: z
          .string()
          .regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        amount: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough(),
        holdoutImprovementPercent: z.number().optional(),
        modelCid: z.string().min(8).max(128).optional(),
        status: z.enum(['pending', 'paid', 'failed', 'zero']),
        createdAt: z.string().datetime({ offset: true }),
        settledAt: z.string().datetime({ offset: true }).optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const RewardPayoutListData = z
  .object({
    items: z.array(
      z
        .object({
          payoutId: z.string().regex(/^rwd_[0-9A-HJKMNP-TV-Z]{26}$/),
          evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
          bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
          workerId: z
            .string()
            .regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          amount: z
            .object({
              amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
              currency: z
                .string()
                .min(3)
                .max(3)
                .regex(/^[A-Z]{3}$/),
            })
            .passthrough(),
          holdoutImprovementPercent: z.number().optional(),
          modelCid: z.string().min(8).max(128).optional(),
          status: z.enum(['pending', 'paid', 'failed', 'zero']),
          createdAt: z.string().datetime({ offset: true }),
          settledAt: z.string().datetime({ offset: true }).optional(),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const RewardPayoutListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              payoutId: z.string().regex(/^rwd_[0-9A-HJKMNP-TV-Z]{26}$/),
              evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
              bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
              workerId: z
                .string()
                .regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              amount: z
                .object({
                  amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                  currency: z
                    .string()
                    .min(3)
                    .max(3)
                    .regex(/^[A-Z]{3}$/),
                })
                .passthrough(),
              holdoutImprovementPercent: z.number().optional(),
              modelCid: z.string().min(8).max(128).optional(),
              status: z.enum(['pending', 'paid', 'failed', 'zero']),
              createdAt: z.string().datetime({ offset: true }),
              settledAt: z.string().datetime({ offset: true }).optional(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const EscrowStatus = z.enum(['active', 'paused', 'drained']);
const EscrowAccount = z
  .object({
    escrowAccountId: z.string().regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/),
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    balance: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    perWorkerCap: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough()
      .optional(),
    status: z.enum(['active', 'paused', 'drained']),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const EscrowAccountResponse = z
  .object({
    data: z
      .object({
        escrowAccountId: z.string().regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/),
        bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
        balance: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough(),
        perWorkerCap: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough()
          .optional(),
        status: z.enum(['active', 'paused', 'drained']),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const BountyId = z.string();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const PayoutId = z.string();
const EvaluationId = z.string();
const WorkerId = z.string();
const Currency = z.string();
const Money = z
  .object({
    amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
    currency: z
      .string()
      .min(3)
      .max(3)
      .regex(/^[A-Z]{3}$/),
  })
  .passthrough();
const ContentCid = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const EscrowAccountId = z.string();

export const schemas: any = {
  PayoutStatus,
  RewardPayout,
  RewardPayoutRequest,
  RewardPayoutResponse,
  RewardPayoutListData,
  RewardPayoutListResponse,
  EscrowStatus,
  EscrowAccount,
  EscrowAccountResponse,
  BountyId,
  Problem,
  PayoutId,
  EvaluationId,
  WorkerId,
  Currency,
  Money,
  ContentCid,
  ResponseMeta,
  EscrowAccountId,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/rewards/escrow/:bountyId',
    alias: 'getEscrowAccount',
    requestFormat: 'json',
    parameters: [
      {
        name: 'bountyId',
        type: 'Path',
        schema: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            escrowAccountId: z.string().regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            balance: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            perWorkerCap: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough()
              .optional(),
            status: z.enum(['active', 'paused', 'drained']),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/rewards/escrow/:bountyId/pause',
    alias: 'pauseEscrow',
    requestFormat: 'json',
    parameters: [
      {
        name: 'bountyId',
        type: 'Path',
        schema: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            escrowAccountId: z.string().regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            balance: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            perWorkerCap: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough()
              .optional(),
            status: z.enum(['active', 'paused', 'drained']),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/rewards/payouts',
    alias: 'listRewardPayouts',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().min(1).max(512).optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
      {
        name: 'bountyId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['pending', 'paid', 'failed', 'zero']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  payoutId: z.string().regex(/^rwd_[0-9A-HJKMNP-TV-Z]{26}$/),
                  evaluationId: z
                    .string()
                    .regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
                  bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
                  workerId: z
                    .string()
                    .regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  amount: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
                  holdoutImprovementPercent: z.number().optional(),
                  modelCid: z.string().min(8).max(128).optional(),
                  status: z.enum(['pending', 'paid', 'failed', 'zero']),
                  createdAt: z.string().datetime({ offset: true }),
                  settledAt: z.string().datetime({ offset: true }).optional(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/rewards/payouts',
    alias: 'executeRewardPayout',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({
            evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
          })
          .passthrough(),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            payoutId: z.string().regex(/^rwd_[0-9A-HJKMNP-TV-Z]{26}$/),
            evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            workerId: z
              .string()
              .regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            amount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            holdoutImprovementPercent: z.number().optional(),
            modelCid: z.string().min(8).max(128).optional(),
            status: z.enum(['pending', 'paid', 'failed', 'zero']),
            createdAt: z.string().datetime({ offset: true }),
            settledAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/rewards/payouts/:payoutId',
    alias: 'getRewardPayout',
    requestFormat: 'json',
    parameters: [
      {
        name: 'payoutId',
        type: 'Path',
        schema: z.string().regex(/^rwd_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            payoutId: z.string().regex(/^rwd_[0-9A-HJKMNP-TV-Z]{26}$/),
            evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            workerId: z
              .string()
              .regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            amount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            holdoutImprovementPercent: z.number().optional(),
            modelCid: z.string().min(8).max(128).optional(),
            status: z.enum(['pending', 'paid', 'failed', 'zero']),
            createdAt: z.string().datetime({ offset: true }),
            settledAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
