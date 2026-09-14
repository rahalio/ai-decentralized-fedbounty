/**
 * Bounties Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/bounties.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type Bounty = components["schemas"]["Bounty"];
export type BountyListData = components["schemas"]["BountyListData"];
export type BountyStatus = components["schemas"]["BountyStatus"];
export type EnrollmentStatus = components["schemas"]["EnrollmentStatus"];
export type PrivacyMode = components["schemas"]["PrivacyMode"];
export type RewardCurveTier = components["schemas"]["RewardCurveTier"];
export type WorkerEnrollment = components["schemas"]["WorkerEnrollment"];
export type WorkerEnrollmentListData = components["schemas"]["WorkerEnrollmentListData"];
export type BountyCreateRequest = components["schemas"]["BountyCreateRequest"];
export type BountyFreezeRequest = components["schemas"]["BountyFreezeRequest"];
export type BountyUpdateRequest = components["schemas"]["BountyUpdateRequest"];
export type WorkerEnrollmentRequest = components["schemas"]["WorkerEnrollmentRequest"];
export type Enrollment = operations["listBountyEnrollments"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateBountyRequestInput = NonNullable<operations["createBounty"]["requestBody"]>["content"]["application/json"];
export type UpdateBountyRequestInput = NonNullable<operations["updateBounty"]["requestBody"]>["content"]["application/json"];
export type UpdateBountyRequest = UpdateBountyRequestInput;
export type FreezeBountyRequestInput = NonNullable<operations["freezeBounty"]["requestBody"]>["content"]["application/json"];
export type EnrollWorkerRequestInput = NonNullable<operations["enrollWorker"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListBountiesParams = NonNullable<operations["listBounties"]["parameters"]["query"]>;
export type GetBountyParams = operations["getBounty"]["parameters"]["path"];
export type UpdateBountyParams = operations["updateBounty"]["parameters"]["path"];
export type PublishBountyParams = operations["publishBounty"]["parameters"]["path"];
export type FreezeBountyParams = operations["freezeBounty"]["parameters"]["path"];
export type CloseBountyParams = operations["closeBounty"]["parameters"]["path"];
export type ListBountyEnrollmentsParams = NonNullable<operations["listBountyEnrollments"]["parameters"]["query"]>;
export type EnrollWorkerParams = operations["enrollWorker"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListBountiesResponse = operations["listBounties"]["responses"]["200"]["content"]["application/json"];
export type CreateBountyResponse = operations["createBounty"]["responses"]["201"]["content"]["application/json"];
export type GetBountyResponse = operations["getBounty"]["responses"]["200"]["content"]["application/json"];
export type UpdateBountyResponse = operations["updateBounty"]["responses"]["200"]["content"]["application/json"];
export type PublishBountyResponse = operations["publishBounty"]["responses"]["200"]["content"]["application/json"];
export type FreezeBountyResponse = operations["freezeBounty"]["responses"]["200"]["content"]["application/json"];
export type CloseBountyResponse = operations["closeBounty"]["responses"]["200"]["content"]["application/json"];
export type ListBountyEnrollmentsResponse = operations["listBountyEnrollments"]["responses"]["200"]["content"]["application/json"];
export type EnrollWorkerResponse = operations["enrollWorker"]["responses"]["201"]["content"]["application/json"];


