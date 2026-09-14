import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createBounty_Body = z
  .object({
    name: z.string().min(1),
    baseModelCid: z.string().min(8).max(128),
    validationSnapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
    rewardCurve: z
      .array(
        z
          .object({
            minImprovementPercent: z.number(),
            payoutAmount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .passthrough()
      )
      .min(1),
    privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
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
    initialEscrow: z
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
  })
  .passthrough();
const updateBounty_Body = z
  .object({
    name: z.string().min(1),
    rewardCurve: z
      .array(
        z
          .object({
            minImprovementPercent: z.number(),
            payoutAmount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .passthrough()
      )
      .min(1),
    privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
    perWorkerCap: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
  })
  .partial()
  .passthrough();
const enrollWorker_Body = z
  .object({
    workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
    environmentAttestation: z.string().min(1),
    termsAccepted: z.boolean(),
  })
  .passthrough();
const BountyStatus = z.enum(['draft', 'open', 'frozen', 'closed']);
const PrivacyMode = z.enum(['federated', 'mpc', 'homomorphic']);
const RewardCurveTier = z
  .object({
    minImprovementPercent: z.number(),
    payoutAmount: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
  })
  .passthrough();
const Bounty = z
  .object({
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    name: z.string().min(1),
    status: z.enum(['draft', 'open', 'frozen', 'closed']),
    baseModelCid: z.string().min(8).max(128),
    validationSnapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
    rewardCurve: z
      .array(
        z
          .object({
            minImprovementPercent: z.number(),
            payoutAmount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .passthrough()
      )
      .min(1),
    privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
    escrowAccountId: z
      .string()
      .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    escrowBalance: z
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
    freezeReason: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const BountyCreateRequest = z
  .object({
    name: z.string().min(1),
    baseModelCid: z.string().min(8).max(128),
    validationSnapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
    rewardCurve: z
      .array(
        z
          .object({
            minImprovementPercent: z.number(),
            payoutAmount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .passthrough()
      )
      .min(1),
    privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
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
    initialEscrow: z
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
  })
  .passthrough();
const BountyUpdateRequest = z
  .object({
    name: z.string().min(1),
    rewardCurve: z
      .array(
        z
          .object({
            minImprovementPercent: z.number(),
            payoutAmount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .passthrough()
      )
      .min(1),
    privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
    perWorkerCap: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
  })
  .partial()
  .passthrough();
const BountyFreezeRequest = z
  .object({ reason: z.string().min(1) })
  .passthrough();
const BountyResponse = z
  .object({
    data: z
      .object({
        bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
        name: z.string().min(1),
        status: z.enum(['draft', 'open', 'frozen', 'closed']),
        baseModelCid: z.string().min(8).max(128),
        validationSnapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
        rewardCurve: z
          .array(
            z
              .object({
                minImprovementPercent: z.number(),
                payoutAmount: z
                  .object({
                    amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                    currency: z
                      .string()
                      .min(3)
                      .max(3)
                      .regex(/^[A-Z]{3}$/),
                  })
                  .passthrough(),
              })
              .passthrough()
          )
          .min(1),
        privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
        escrowAccountId: z
          .string()
          .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        escrowBalance: z
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
        freezeReason: z.string().optional(),
        createdAt: z.string().datetime({ offset: true }),
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
const BountyListData = z
  .object({
    items: z.array(
      z
        .object({
          bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
          name: z.string().min(1),
          status: z.enum(['draft', 'open', 'frozen', 'closed']),
          baseModelCid: z.string().min(8).max(128),
          validationSnapshotId: z
            .string()
            .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
          rewardCurve: z
            .array(
              z
                .object({
                  minImprovementPercent: z.number(),
                  payoutAmount: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
                })
                .passthrough()
            )
            .min(1),
          privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
          escrowAccountId: z
            .string()
            .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          escrowBalance: z
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
          freezeReason: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const BountyListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
              name: z.string().min(1),
              status: z.enum(['draft', 'open', 'frozen', 'closed']),
              baseModelCid: z.string().min(8).max(128),
              validationSnapshotId: z
                .string()
                .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
              rewardCurve: z
                .array(
                  z
                    .object({
                      minImprovementPercent: z.number(),
                      payoutAmount: z
                        .object({
                          amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                          currency: z
                            .string()
                            .min(3)
                            .max(3)
                            .regex(/^[A-Z]{3}$/),
                        })
                        .passthrough(),
                    })
                    .passthrough()
                )
                .min(1),
              privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
              escrowAccountId: z
                .string()
                .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              escrowBalance: z
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
              freezeReason: z.string().optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
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
const EnrollmentStatus = z.enum(['pending_attestation', 'active', 'blocked']);
const WorkerEnrollment = z
  .object({
    enrollmentId: z.string().regex(/^enr_[0-9A-HJKMNP-TV-Z]{26}$/),
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
    status: z.enum(['pending_attestation', 'active', 'blocked']),
    environmentAttestation: z.string(),
    termsAccepted: z.boolean(),
    attestedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const WorkerEnrollmentRequest = z
  .object({
    workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
    environmentAttestation: z.string().min(1),
    termsAccepted: z.boolean(),
  })
  .passthrough();
const WorkerEnrollmentResponse = z
  .object({
    data: z
      .object({
        enrollmentId: z.string().regex(/^enr_[0-9A-HJKMNP-TV-Z]{26}$/),
        bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
        workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
        status: z.enum(['pending_attestation', 'active', 'blocked']),
        environmentAttestation: z.string(),
        termsAccepted: z.boolean(),
        attestedAt: z.string().datetime({ offset: true }).optional(),
        createdAt: z.string().datetime({ offset: true }),
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
const WorkerEnrollmentListData = z
  .object({
    items: z.array(
      z
        .object({
          enrollmentId: z.string().regex(/^enr_[0-9A-HJKMNP-TV-Z]{26}$/),
          bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
          workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
          status: z.enum(['pending_attestation', 'active', 'blocked']),
          environmentAttestation: z.string(),
          termsAccepted: z.boolean(),
          attestedAt: z.string().datetime({ offset: true }).optional(),
          createdAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const WorkerEnrollmentListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              enrollmentId: z.string().regex(/^enr_[0-9A-HJKMNP-TV-Z]{26}$/),
              bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
              workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
              status: z.enum(['pending_attestation', 'active', 'blocked']),
              environmentAttestation: z.string(),
              termsAccepted: z.boolean(),
              attestedAt: z.string().datetime({ offset: true }).optional(),
              createdAt: z.string().datetime({ offset: true }),
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
const BountyId = z.string();
const ContentCid = z.string();
const ValidationSnapshotId = z.string();
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
const EscrowAccountId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const EnrollmentId = z.string();
const WorkerId = z.string();

export const schemas: any = {
  createBounty_Body,
  updateBounty_Body,
  enrollWorker_Body,
  BountyStatus,
  PrivacyMode,
  RewardCurveTier,
  Bounty,
  BountyCreateRequest,
  BountyUpdateRequest,
  BountyFreezeRequest,
  BountyResponse,
  BountyListData,
  BountyListResponse,
  EnrollmentStatus,
  WorkerEnrollment,
  WorkerEnrollmentRequest,
  WorkerEnrollmentResponse,
  WorkerEnrollmentListData,
  WorkerEnrollmentListResponse,
  Problem,
  BountyId,
  ContentCid,
  ValidationSnapshotId,
  Currency,
  Money,
  EscrowAccountId,
  ResponseMeta,
  EnrollmentId,
  WorkerId,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/bounties',
    alias: 'listBounties',
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
        name: 'status',
        type: 'Query',
        schema: z.enum(['draft', 'open', 'frozen', 'closed']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
                  name: z.string().min(1),
                  status: z.enum(['draft', 'open', 'frozen', 'closed']),
                  baseModelCid: z.string().min(8).max(128),
                  validationSnapshotId: z
                    .string()
                    .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
                  rewardCurve: z
                    .array(
                      z
                        .object({
                          minImprovementPercent: z.number(),
                          payoutAmount: z
                            .object({
                              amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                              currency: z
                                .string()
                                .min(3)
                                .max(3)
                                .regex(/^[A-Z]{3}$/),
                            })
                            .passthrough(),
                        })
                        .passthrough()
                    )
                    .min(1),
                  privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
                  escrowAccountId: z
                    .string()
                    .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  escrowBalance: z
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
                  freezeReason: z.string().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
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
    path: '/v1/bounties',
    alias: 'createBounty',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createBounty_Body,
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
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['draft', 'open', 'frozen', 'closed']),
            baseModelCid: z.string().min(8).max(128),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            rewardCurve: z
              .array(
                z
                  .object({
                    minImprovementPercent: z.number(),
                    payoutAmount: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              )
              .min(1),
            privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
            escrowAccountId: z
              .string()
              .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            escrowBalance: z
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
            freezeReason: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    ],
  },
  {
    method: 'get',
    path: '/v1/bounties/:bountyId',
    alias: 'getBounty',
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
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['draft', 'open', 'frozen', 'closed']),
            baseModelCid: z.string().min(8).max(128),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            rewardCurve: z
              .array(
                z
                  .object({
                    minImprovementPercent: z.number(),
                    payoutAmount: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              )
              .min(1),
            privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
            escrowAccountId: z
              .string()
              .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            escrowBalance: z
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
            freezeReason: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    method: 'patch',
    path: '/v1/bounties/:bountyId',
    alias: 'updateBounty',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateBounty_Body,
      },
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
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['draft', 'open', 'frozen', 'closed']),
            baseModelCid: z.string().min(8).max(128),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            rewardCurve: z
              .array(
                z
                  .object({
                    minImprovementPercent: z.number(),
                    payoutAmount: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              )
              .min(1),
            privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
            escrowAccountId: z
              .string()
              .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            escrowBalance: z
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
            freezeReason: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    method: 'post',
    path: '/v1/bounties/:bountyId/close',
    alias: 'closeBounty',
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
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['draft', 'open', 'frozen', 'closed']),
            baseModelCid: z.string().min(8).max(128),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            rewardCurve: z
              .array(
                z
                  .object({
                    minImprovementPercent: z.number(),
                    payoutAmount: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              )
              .min(1),
            privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
            escrowAccountId: z
              .string()
              .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            escrowBalance: z
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
            freezeReason: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    path: '/v1/bounties/:bountyId/enrollments',
    alias: 'listBountyEnrollments',
    requestFormat: 'json',
    parameters: [
      {
        name: 'bountyId',
        type: 'Path',
        schema: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  enrollmentId: z
                    .string()
                    .regex(/^enr_[0-9A-HJKMNP-TV-Z]{26}$/),
                  bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
                  workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
                  status: z.enum(['pending_attestation', 'active', 'blocked']),
                  environmentAttestation: z.string(),
                  termsAccepted: z.boolean(),
                  attestedAt: z.string().datetime({ offset: true }).optional(),
                  createdAt: z.string().datetime({ offset: true }),
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
    path: '/v1/bounties/:bountyId/enrollments',
    alias: 'enrollWorker',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: enrollWorker_Body,
      },
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
            enrollmentId: z.string().regex(/^enr_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum(['pending_attestation', 'active', 'blocked']),
            environmentAttestation: z.string(),
            termsAccepted: z.boolean(),
            attestedAt: z.string().datetime({ offset: true }).optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    method: 'post',
    path: '/v1/bounties/:bountyId/freeze',
    alias: 'freezeBounty',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ reason: z.string().min(1) }).passthrough(),
      },
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
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['draft', 'open', 'frozen', 'closed']),
            baseModelCid: z.string().min(8).max(128),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            rewardCurve: z
              .array(
                z
                  .object({
                    minImprovementPercent: z.number(),
                    payoutAmount: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              )
              .min(1),
            privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
            escrowAccountId: z
              .string()
              .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            escrowBalance: z
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
            freezeReason: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
    path: '/v1/bounties/:bountyId/publish',
    alias: 'publishBounty',
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
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1),
            status: z.enum(['draft', 'open', 'frozen', 'closed']),
            baseModelCid: z.string().min(8).max(128),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            rewardCurve: z
              .array(
                z
                  .object({
                    minImprovementPercent: z.number(),
                    payoutAmount: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              )
              .min(1),
            privacyMode: z.enum(['federated', 'mpc', 'homomorphic']),
            escrowAccountId: z
              .string()
              .regex(/^esc_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            escrowBalance: z
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
            freezeReason: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
