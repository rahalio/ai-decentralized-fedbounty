import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createValidationSnapshot_Body = z
  .object({
    metricName: z.string().min(1),
    datasetRef: z.string().optional(),
    freezeNow: z.boolean().optional().default(true),
  })
  .passthrough();
const openScoringDispute_Body = z
  .object({
    evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
    reason: z.string().min(1),
  })
  .passthrough();
const EvaluationStatus = z.enum(['queued', 'running', 'completed', 'failed']);
const EvaluationResult = z
  .object({
    evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
    submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
    bountyId: z
      .string()
      .regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    validationSnapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
    status: z.enum(['queued', 'running', 'completed', 'failed']),
    holdoutImprovementPercent: z.number().optional(),
    publicMetricPercent: z.number().optional(),
    poisonDetected: z.boolean().optional(),
    payoutEligible: z.boolean().optional(),
    completedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const HoldoutValidationRequest = z
  .object({ submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/) })
  .passthrough();
const EvaluationResultResponse = z
  .object({
    data: z
      .object({
        evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
        submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
        bountyId: z
          .string()
          .regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        validationSnapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
        status: z.enum(['queued', 'running', 'completed', 'failed']),
        holdoutImprovementPercent: z.number().optional(),
        publicMetricPercent: z.number().optional(),
        poisonDetected: z.boolean().optional(),
        payoutEligible: z.boolean().optional(),
        completedAt: z.string().datetime({ offset: true }).optional(),
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
const EvaluationResultListData = z
  .object({
    items: z.array(
      z
        .object({
          evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
          submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
          bountyId: z
            .string()
            .regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          validationSnapshotId: z
            .string()
            .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
          status: z.enum(['queued', 'running', 'completed', 'failed']),
          holdoutImprovementPercent: z.number().optional(),
          publicMetricPercent: z.number().optional(),
          poisonDetected: z.boolean().optional(),
          payoutEligible: z.boolean().optional(),
          completedAt: z.string().datetime({ offset: true }).optional(),
          createdAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const EvaluationResultListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
              submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
              bountyId: z
                .string()
                .regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              validationSnapshotId: z
                .string()
                .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
              status: z.enum(['queued', 'running', 'completed', 'failed']),
              holdoutImprovementPercent: z.number().optional(),
              publicMetricPercent: z.number().optional(),
              poisonDetected: z.boolean().optional(),
              payoutEligible: z.boolean().optional(),
              completedAt: z.string().datetime({ offset: true }).optional(),
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
const ValidationSnapshot = z
  .object({
    snapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
    metricName: z.string(),
    datasetRef: z.string().optional(),
    frozen: z.boolean(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ValidationSnapshotCreateRequest = z
  .object({
    metricName: z.string().min(1),
    datasetRef: z.string().optional(),
    freezeNow: z.boolean().optional().default(true),
  })
  .passthrough();
const ValidationSnapshotResponse = z
  .object({
    data: z
      .object({
        snapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
        metricName: z.string(),
        datasetRef: z.string().optional(),
        frozen: z.boolean(),
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
const DisputeStatus = z.enum([
  'open',
  'replaying',
  'upheld',
  'overturned',
  'closed',
]);
const ScoringDispute = z
  .object({
    disputeId: z.string().regex(/^dsp_[0-9A-HJKMNP-TV-Z]{26}$/),
    evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
    validationSnapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
    status: z.enum(['open', 'replaying', 'upheld', 'overturned', 'closed']),
    reason: z.string().optional(),
    replayEvaluationId: z
      .string()
      .regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    createdAt: z.string().datetime({ offset: true }),
    resolvedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const DisputeOpenRequest = z
  .object({
    evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
    reason: z.string().min(1),
  })
  .passthrough();
const DisputeResponse = z
  .object({
    data: z
      .object({
        disputeId: z.string().regex(/^dsp_[0-9A-HJKMNP-TV-Z]{26}$/),
        evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
        validationSnapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
        status: z.enum(['open', 'replaying', 'upheld', 'overturned', 'closed']),
        reason: z.string().optional(),
        replayEvaluationId: z
          .string()
          .regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        createdAt: z.string().datetime({ offset: true }),
        resolvedAt: z.string().datetime({ offset: true }).optional(),
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
const SubmissionId = z.string();
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
const EvaluationId = z.string();
const ValidationSnapshotId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const DisputeId = z.string();

export const schemas: any = {
  createValidationSnapshot_Body,
  openScoringDispute_Body,
  EvaluationStatus,
  EvaluationResult,
  HoldoutValidationRequest,
  EvaluationResultResponse,
  EvaluationResultListData,
  EvaluationResultListResponse,
  ValidationSnapshot,
  ValidationSnapshotCreateRequest,
  ValidationSnapshotResponse,
  DisputeStatus,
  ScoringDispute,
  DisputeOpenRequest,
  DisputeResponse,
  BountyId,
  SubmissionId,
  Problem,
  EvaluationId,
  ValidationSnapshotId,
  ResponseMeta,
  DisputeId,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/v1/disputes',
    alias: 'openScoringDispute',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: openScoringDispute_Body,
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
            disputeId: z.string().regex(/^dsp_[0-9A-HJKMNP-TV-Z]{26}$/),
            evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum([
              'open',
              'replaying',
              'upheld',
              'overturned',
              'closed',
            ]),
            reason: z.string().optional(),
            replayEvaluationId: z
              .string()
              .regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            resolvedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/disputes/:disputeId',
    alias: 'getScoringDispute',
    requestFormat: 'json',
    parameters: [
      {
        name: 'disputeId',
        type: 'Path',
        schema: z.string().regex(/^dsp_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            disputeId: z.string().regex(/^dsp_[0-9A-HJKMNP-TV-Z]{26}$/),
            evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum([
              'open',
              'replaying',
              'upheld',
              'overturned',
              'closed',
            ]),
            reason: z.string().optional(),
            replayEvaluationId: z
              .string()
              .regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            resolvedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/disputes/:disputeId/replay',
    alias: 'replayDisputeEvaluation',
    requestFormat: 'json',
    parameters: [
      {
        name: 'disputeId',
        type: 'Path',
        schema: z.string().regex(/^dsp_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            disputeId: z.string().regex(/^dsp_[0-9A-HJKMNP-TV-Z]{26}$/),
            evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum([
              'open',
              'replaying',
              'upheld',
              'overturned',
              'closed',
            ]),
            reason: z.string().optional(),
            replayEvaluationId: z
              .string()
              .regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            resolvedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/validation-snapshots',
    alias: 'createValidationSnapshot',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createValidationSnapshot_Body,
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
            snapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            metricName: z.string(),
            datasetRef: z.string().optional(),
            frozen: z.boolean(),
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
    ],
  },
  {
    method: 'get',
    path: '/v1/validation-snapshots/:snapshotId',
    alias: 'getValidationSnapshot',
    requestFormat: 'json',
    parameters: [
      {
        name: 'snapshotId',
        type: 'Path',
        schema: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            snapshotId: z.string().regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            metricName: z.string(),
            datasetRef: z.string().optional(),
            frozen: z.boolean(),
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
    path: '/v1/validations',
    alias: 'listEvaluationResults',
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
        name: 'submissionId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  evaluationId: z
                    .string()
                    .regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
                  submissionId: z
                    .string()
                    .regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
                  bountyId: z
                    .string()
                    .regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  validationSnapshotId: z
                    .string()
                    .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
                  status: z.enum(['queued', 'running', 'completed', 'failed']),
                  holdoutImprovementPercent: z.number().optional(),
                  publicMetricPercent: z.number().optional(),
                  poisonDetected: z.boolean().optional(),
                  payoutEligible: z.boolean().optional(),
                  completedAt: z.string().datetime({ offset: true }).optional(),
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
    ],
  },
  {
    method: 'post',
    path: '/v1/validations',
    alias: 'runHoldoutValidation',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({
            submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
            submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z
              .string()
              .regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum(['queued', 'running', 'completed', 'failed']),
            holdoutImprovementPercent: z.number().optional(),
            publicMetricPercent: z.number().optional(),
            poisonDetected: z.boolean().optional(),
            payoutEligible: z.boolean().optional(),
            completedAt: z.string().datetime({ offset: true }).optional(),
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
    ],
  },
  {
    method: 'get',
    path: '/v1/validations/:evaluationId',
    alias: 'getEvaluationResult',
    requestFormat: 'json',
    parameters: [
      {
        name: 'evaluationId',
        type: 'Path',
        schema: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            evaluationId: z.string().regex(/^vld_[0-9A-HJKMNP-TV-Z]{26}$/),
            submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z
              .string()
              .regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            validationSnapshotId: z
              .string()
              .regex(/^snp_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum(['queued', 'running', 'completed', 'failed']),
            holdoutImprovementPercent: z.number().optional(),
            publicMetricPercent: z.number().optional(),
            poisonDetected: z.boolean().optional(),
            payoutEligible: z.boolean().optional(),
            completedAt: z.string().datetime({ offset: true }).optional(),
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
