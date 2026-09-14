/**
 * Rewards Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/rewards.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type EscrowAccount = components["schemas"]["EscrowAccount"];
export type EscrowStatus = components["schemas"]["EscrowStatus"];
export type PayoutStatus = components["schemas"]["PayoutStatus"];
export type RewardPayout = components["schemas"]["RewardPayout"];
export type RewardPayoutListData = components["schemas"]["RewardPayoutListData"];
export type RewardPayoutRequest = components["schemas"]["RewardPayoutRequest"];
export type Payout = operations["listRewardPayouts"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ExecuteRewardPayoutRequestInput = NonNullable<operations["executeRewardPayout"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListRewardPayoutsParams = NonNullable<operations["listRewardPayouts"]["parameters"]["query"]>;
export type GetRewardPayoutParams = operations["getRewardPayout"]["parameters"]["path"];
export type GetEscrowAccountParams = operations["getEscrowAccount"]["parameters"]["path"];
export type PauseEscrowParams = operations["pauseEscrow"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListRewardPayoutsResponse = operations["listRewardPayouts"]["responses"]["200"]["content"]["application/json"];
export type ExecuteRewardPayoutResponse = operations["executeRewardPayout"]["responses"]["202"]["content"]["application/json"];
export type GetRewardPayoutResponse = operations["getRewardPayout"]["responses"]["200"]["content"]["application/json"];
export type GetEscrowAccountResponse = operations["getEscrowAccount"]["responses"]["200"]["content"]["application/json"];
export type PauseEscrowResponse = operations["pauseEscrow"]["responses"]["200"]["content"]["application/json"];


