/**
 * Submissions Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/submissions.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ModelSubmission = components["schemas"]["ModelSubmission"];
export type ModelSubmissionListData = components["schemas"]["ModelSubmissionListData"];
export type SubmissionStatus = components["schemas"]["SubmissionStatus"];
export type ModelSubmissionRequest = components["schemas"]["ModelSubmissionRequest"];
export type SubmissionQuarantineRequest = components["schemas"]["SubmissionQuarantineRequest"];
export type Submission = operations["listModelSubmissions"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type SubmitModelArtifactRequestInput = NonNullable<operations["submitModelArtifact"]["requestBody"]>["content"]["application/json"];
export type QuarantineModelSubmissionRequestInput = NonNullable<operations["quarantineModelSubmission"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListModelSubmissionsParams = NonNullable<operations["listModelSubmissions"]["parameters"]["query"]>;
export type GetModelSubmissionParams = operations["getModelSubmission"]["parameters"]["path"];
export type QuarantineModelSubmissionParams = operations["quarantineModelSubmission"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListModelSubmissionsResponse = operations["listModelSubmissions"]["responses"]["200"]["content"]["application/json"];
export type SubmitModelArtifactResponse = operations["submitModelArtifact"]["responses"]["201"]["content"]["application/json"];
export type GetModelSubmissionResponse = operations["getModelSubmission"]["responses"]["200"]["content"]["application/json"];
export type QuarantineModelSubmissionResponse = operations["quarantineModelSubmission"]["responses"]["200"]["content"]["application/json"];


