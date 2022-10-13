package shared

import (
	"time"
)

type Dataset struct {
	Available       *bool         `json:"available"`
	CreatedAt       *time.Time    `json:"createdAt"`
	ID              int64         `json:"id"`
	LabelSummary    *LabelSummary `json:"labelSummary"`
	Language        *string       `json:"language"`
	Name            string        `json:"name"`
	NumOfDuplicates *int32        `json:"numOfDuplicates"`
	Object          *string       `json:"object"`
	StatusMsg       *string       `json:"statusMsg"`
	TotalExamples   *int32        `json:"totalExamples"`
	TotalLabels     *int32        `json:"totalLabels"`
	Type            *string       `json:"type"`
	UpdatedAt       *time.Time    `json:"updatedAt"`
}
