/**
 * Validations Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/validations.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type DisputeStatus = components["schemas"]["DisputeStatus"];
export type EvaluationResult = components["schemas"]["EvaluationResult"];
export type EvaluationResultListData = components["schemas"]["EvaluationResultListData"];
export type EvaluationStatus = components["schemas"]["EvaluationStatus"];
export type ScoringDispute = components["schemas"]["ScoringDispute"];
export type ValidationSnapshot = components["schemas"]["ValidationSnapshot"];
export type DisputeOpenRequest = components["schemas"]["DisputeOpenRequest"];
export type HoldoutValidationRequest = components["schemas"]["HoldoutValidationRequest"];
export type ValidationSnapshotCreateRequest = components["schemas"]["ValidationSnapshotCreateRequest"];
export type Validation = operations["listEvaluationResults"]["responses"]["200"]["content"]["application/json"]["data"];
export type Dispute = components["schemas"]["DisputeResponse"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RunHoldoutValidationRequestInput = NonNullable<operations["runHoldoutValidation"]["requestBody"]>["content"]["application/json"];
export type CreateValidationSnapshotRequestInput = NonNullable<operations["createValidationSnapshot"]["requestBody"]>["content"]["application/json"];
export type OpenScoringDisputeRequestInput = NonNullable<operations["openScoringDispute"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListEvaluationResultsParams = NonNullable<operations["listEvaluationResults"]["parameters"]["query"]>;
export type GetEvaluationResultParams = operations["getEvaluationResult"]["parameters"]["path"];
export type GetValidationSnapshotParams = operations["getValidationSnapshot"]["parameters"]["path"];
export type ReplayDisputeEvaluationParams = operations["replayDisputeEvaluation"]["parameters"]["path"];
export type GetScoringDisputeParams = operations["getScoringDispute"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListEvaluationResultsResponse = operations["listEvaluationResults"]["responses"]["200"]["content"]["application/json"];
export type RunHoldoutValidationResponse = operations["runHoldoutValidation"]["responses"]["202"]["content"]["application/json"];
export type GetEvaluationResultResponse = operations["getEvaluationResult"]["responses"]["200"]["content"]["application/json"];
export type CreateValidationSnapshotResponse = operations["createValidationSnapshot"]["responses"]["201"]["content"]["application/json"];
export type GetValidationSnapshotResponse = operations["getValidationSnapshot"]["responses"]["200"]["content"]["application/json"];
export type OpenScoringDisputeResponse = operations["openScoringDispute"]["responses"]["201"]["content"]["application/json"];
export type ReplayDisputeEvaluationResponse = operations["replayDisputeEvaluation"]["responses"]["202"]["content"]["application/json"];
export type GetScoringDisputeResponse = operations["getScoringDispute"]["responses"]["200"]["content"]["application/json"];


