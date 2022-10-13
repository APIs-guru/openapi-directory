package shared

import (
	"time"
)

type BillSummary struct {
	BillGenerationTime *time.Time         `json:"billGenerationTime"`
	EnvironmentID      *string            `json:"environmentId"`
	ID                 *string            `json:"id"`
	IsFinalBill        *bool              `json:"isFinalBill"`
	PartitionKey       *string            `json:"partitionKey"`
	PeriodEnd          *time.Time         `json:"periodEnd"`
	PeriodStart        *time.Time         `json:"periodStart"`
	Plan               *VsoPlanInfo       `json:"plan"`
	PlanIsDeleted      *bool              `json:"planIsDeleted"`
	Usage              map[string]float64 `json:"usage"`
	UsageDetail        []EnvironmentUsage `json:"usageDetail"`
}
