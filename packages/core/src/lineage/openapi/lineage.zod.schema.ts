import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const mergeModelVersion_Body = z
  .object({
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    submissionIds: z
      .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
      .min(1),
    parentVersionId: z
      .string()
      .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    mergedModelCid: z.string().min(8).max(128).optional(),
  })
  .passthrough();
const ModelVersion = z
  .object({
    versionId: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelCid: z.string().min(8).max(128),
    parentVersionId: z
      .string()
      .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    contributorWorkerIds: z.array(
      z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
    ),
    sourceSubmissionIds: z
      .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
      .optional(),
    canonical: z.boolean().optional(),
    mergeConflict: z.boolean().optional(),
    mergedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ModelMergeRequest = z
  .object({
    bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
    submissionIds: z
      .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
      .min(1),
    parentVersionId: z
      .string()
      .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    mergedModelCid: z.string().min(8).max(128).optional(),
  })
  .passthrough();
const ModelVersionResponse = z
  .object({
    data: z
      .object({
        versionId: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
        bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
        modelCid: z.string().min(8).max(128),
        parentVersionId: z
          .string()
          .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        contributorWorkerIds: z.array(
          z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
        ),
        sourceSubmissionIds: z
          .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
          .optional(),
        canonical: z.boolean().optional(),
        mergeConflict: z.boolean().optional(),
        mergedAt: z.string().datetime({ offset: true }),
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
const ModelVersionListData = z
  .object({
    items: z.array(
      z
        .object({
          versionId: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
          bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
          modelCid: z.string().min(8).max(128),
          parentVersionId: z
            .string()
            .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          contributorWorkerIds: z.array(
            z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
          ),
          sourceSubmissionIds: z
            .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
            .optional(),
          canonical: z.boolean().optional(),
          mergeConflict: z.boolean().optional(),
          mergedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ModelVersionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              versionId: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
              bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
              modelCid: z.string().min(8).max(128),
              parentVersionId: z
                .string()
                .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              contributorWorkerIds: z.array(
                z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
              ),
              sourceSubmissionIds: z
                .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
                .optional(),
              canonical: z.boolean().optional(),
              mergeConflict: z.boolean().optional(),
              mergedAt: z.string().datetime({ offset: true }),
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
const ModelVersionId = z.string();
const ContentCid = z.string();
const WorkerId = z.string();
const SubmissionId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  mergeModelVersion_Body,
  ModelVersion,
  ModelMergeRequest,
  ModelVersionResponse,
  ModelVersionListData,
  ModelVersionListResponse,
  BountyId,
  Problem,
  ModelVersionId,
  ContentCid,
  WorkerId,
  SubmissionId,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/lineage/versions',
    alias: 'listModelVersions',
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
        schema: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  versionId: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
                  bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
                  modelCid: z.string().min(8).max(128),
                  parentVersionId: z
                    .string()
                    .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  contributorWorkerIds: z.array(
                    z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
                  ),
                  sourceSubmissionIds: z
                    .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
                    .optional(),
                  canonical: z.boolean().optional(),
                  mergeConflict: z.boolean().optional(),
                  mergedAt: z.string().datetime({ offset: true }),
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
    path: '/v1/lineage/versions',
    alias: 'mergeModelVersion',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: mergeModelVersion_Body,
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
            versionId: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelCid: z.string().min(8).max(128),
            parentVersionId: z
              .string()
              .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            contributorWorkerIds: z.array(
              z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
            ),
            sourceSubmissionIds: z
              .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
              .optional(),
            canonical: z.boolean().optional(),
            mergeConflict: z.boolean().optional(),
            mergedAt: z.string().datetime({ offset: true }),
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
    path: '/v1/lineage/versions/:versionId',
    alias: 'getModelVersion',
    requestFormat: 'json',
    parameters: [
      {
        name: 'versionId',
        type: 'Path',
        schema: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            versionId: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelCid: z.string().min(8).max(128),
            parentVersionId: z
              .string()
              .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            contributorWorkerIds: z.array(
              z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
            ),
            sourceSubmissionIds: z
              .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
              .optional(),
            canonical: z.boolean().optional(),
            mergeConflict: z.boolean().optional(),
            mergedAt: z.string().datetime({ offset: true }),
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
    path: '/v1/lineage/versions/:versionId/pin',
    alias: 'pinCanonicalModelVersion',
    requestFormat: 'json',
    parameters: [
      {
        name: 'versionId',
        type: 'Path',
        schema: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            versionId: z.string().regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/),
            bountyId: z.string().regex(/^bty_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelCid: z.string().min(8).max(128),
            parentVersionId: z
              .string()
              .regex(/^lng_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            contributorWorkerIds: z.array(
              z.string().regex(/^wrk_[0-9A-HJKMNP-TV-Z]{26}$/)
            ),
            sourceSubmissionIds: z
              .array(z.string().regex(/^sub_[0-9A-HJKMNP-TV-Z]{26}$/))
              .optional(),
            canonical: z.boolean().optional(),
            mergeConflict: z.boolean().optional(),
            mergedAt: z.string().datetime({ offset: true }),
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
