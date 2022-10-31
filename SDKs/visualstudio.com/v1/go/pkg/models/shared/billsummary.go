package shared

import (
"time")

type BillSummary struct {
    BillGenerationTime *time.Time `json:"billGenerationTime,omitempty"`
    EnvironmentID *string `json:"environmentId,omitempty"`
    ID *string `json:"id,omitempty"`
    IsFinalBill *bool `json:"isFinalBill,omitempty"`
    PartitionKey *string `json:"partitionKey,omitempty"`
    PeriodEnd *time.Time `json:"periodEnd,omitempty"`
    PeriodStart *time.Time `json:"periodStart,omitempty"`
    Plan *VsoPlanInfo `json:"plan,omitempty"`
    PlanIsDeleted *bool `json:"planIsDeleted,omitempty"`
    Usage map[string]float64 `json:"usage,omitempty"`
    UsageDetail []EnvironmentUsage `json:"usageDetail,omitempty"`
    
}

