import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const submitModelArtifact_Body = z
  .object({
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelCid: z.string().min(8).max(128),
    publicMetricHint: z.number().optional(),
  })
  .passthrough();
const SubmissionStatus = z.enum([
  'pending',
  'evaluating',
  'accepted',
  'rejected',
  'quarantined',
]);
const ModelSubmission = z
  .object({
    submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelCid: z.string().min(8).max(128),
    status: z.enum([
      'pending',
      'evaluating',
      'accepted',
      'rejected',
      'quarantined',
    ]),
    rejectReason: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ModelSubmissionRequest = z
  .object({
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelCid: z.string().min(8).max(128),
    publicMetricHint: z.number().optional(),
  })
  .passthrough();
const SubmissionQuarantineRequest = z
  .object({ reason: z.string().min(1) })
  .passthrough();
const ModelSubmissionResponse = z
  .object({
    data: z
      .object({
        submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
        bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
        workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
        modelCid: z.string().min(8).max(128),
        status: z.enum([
          'pending',
          'evaluating',
          'accepted',
          'rejected',
          'quarantined',
        ]),
        rejectReason: z.string().optional(),
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
const ModelSubmissionListData = z
  .object({
    items: z.array(
      z
        .object({
          submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
          bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
          workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
          modelCid: z.string().min(8).max(128),
          status: z.enum([
            'pending',
            'evaluating',
            'accepted',
            'rejected',
            'quarantined',
          ]),
          rejectReason: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ModelSubmissionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
              bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
              workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
              modelCid: z.string().min(8).max(128),
              status: z.enum([
                'pending',
                'evaluating',
                'accepted',
                'rejected',
                'quarantined',
              ]),
              rejectReason: z.string().optional(),
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
const BountyId = z.string();
const WorkerId = z.string();
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
const SubmissionId = z.string();
const ContentCid = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  submitModelArtifact_Body,
  SubmissionStatus,
  ModelSubmission,
  ModelSubmissionRequest,
  SubmissionQuarantineRequest,
  ModelSubmissionResponse,
  ModelSubmissionListData,
  ModelSubmissionListResponse,
  BountyId,
  WorkerId,
  Problem,
  SubmissionId,
  ContentCid,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/submissions',
    alias: 'listModelSubmissions',
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
        name: 'workerId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum([
            'pending',
            'evaluating',
            'accepted',
            'rejected',
            'quarantined',
          ])
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
                  submissionId: z
                    .string()
                    .regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
                  bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
                  workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
                  modelCid: z.string().min(8).max(128),
                  status: z.enum([
                    'pending',
                    'evaluating',
                    'accepted',
                    'rejected',
                    'quarantined',
                  ]),
                  rejectReason: z.string().optional(),
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
    path: '/v1/submissions',
    alias: 'submitModelArtifact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: submitModelArtifact_Body,
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
            submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelCid: z.string().min(8).max(128),
            status: z.enum([
              'pending',
              'evaluating',
              'accepted',
              'rejected',
              'quarantined',
            ]),
            rejectReason: z.string().optional(),
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
    path: '/v1/submissions/:submissionId',
    alias: 'getModelSubmission',
    requestFormat: 'json',
    parameters: [
      {
        name: 'submissionId',
        type: 'Path',
        schema: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelCid: z.string().min(8).max(128),
            status: z.enum([
              'pending',
              'evaluating',
              'accepted',
              'rejected',
              'quarantined',
            ]),
            rejectReason: z.string().optional(),
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
    path: '/v1/submissions/:submissionId/quarantine',
    alias: 'quarantineModelSubmission',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ reason: z.string().min(1) }).passthrough(),
      },
      {
        name: 'submissionId',
        type: 'Path',
        schema: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            submissionId: z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            workerId: z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelCid: z.string().min(8).max(128),
            status: z.enum([
              'pending',
              'evaluating',
              'accepted',
              'rejected',
              'quarantined',
            ]),
            rejectReason: z.string().optional(),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
