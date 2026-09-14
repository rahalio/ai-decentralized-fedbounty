/**
 * Reporting Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/reporting.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type BountyAuditLine = components["schemas"]["BountyAuditLine"];
export type BountyAuditReport = components["schemas"]["BountyAuditReport"];
export type PeriodReport = components["schemas"]["PeriodReport"];
export type PeriodReportListData = components["schemas"]["PeriodReportListData"];
export type PeriodReportCreateRequest = components["schemas"]["PeriodReportCreateRequest"];
export type Report = operations["listReports"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreatePeriodReportRequestInput = NonNullable<operations["createPeriodReport"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type GetBountyAuditReportParams = NonNullable<operations["getBountyAuditReport"]["parameters"]["query"]>;
export type ListReportsParams = NonNullable<operations["listReports"]["parameters"]["query"]>;
export type GetReportParams = operations["getReport"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type GetBountyAuditReportResponse = operations["getBountyAuditReport"]["responses"]["200"]["content"]["application/json"];
export type ListReportsResponse = operations["listReports"]["responses"]["200"]["content"]["application/json"];
export type CreatePeriodReportResponse = operations["createPeriodReport"]["responses"]["201"]["content"]["application/json"];
export type GetReportResponse = operations["getReport"]["responses"]["200"]["content"]["application/json"];


