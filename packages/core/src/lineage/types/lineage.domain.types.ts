/**
 * Lineage Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/lineage.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ModelVersion = components["schemas"]["ModelVersion"];
export type ModelVersionListData = components["schemas"]["ModelVersionListData"];
export type ModelMergeRequest = components["schemas"]["ModelMergeRequest"];
export type Version = operations["listModelVersions"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type MergeModelVersionRequestInput = NonNullable<operations["mergeModelVersion"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListModelVersionsParams = NonNullable<operations["listModelVersions"]["parameters"]["query"]>;
export type GetModelVersionParams = operations["getModelVersion"]["parameters"]["path"];
export type PinCanonicalModelVersionParams = operations["pinCanonicalModelVersion"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListModelVersionsResponse = operations["listModelVersions"]["responses"]["200"]["content"]["application/json"];
export type MergeModelVersionResponse = operations["mergeModelVersion"]["responses"]["201"]["content"]["application/json"];
export type GetModelVersionResponse = operations["getModelVersion"]["responses"]["200"]["content"]["application/json"];
export type PinCanonicalModelVersionResponse = operations["pinCanonicalModelVersion"]["responses"]["200"]["content"]["application/json"];


