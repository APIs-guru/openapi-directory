package shared

import (
	"time"
)

type Dataset struct {
	Available       *bool         `json:"available,omitempty"`
	CreatedAt       *time.Time    `json:"createdAt,omitempty"`
	ID              int64         `json:"id"`
	LabelSummary    *LabelSummary `json:"labelSummary,omitempty"`
	Language        *string       `json:"language,omitempty"`
	Name            string        `json:"name"`
	NumOfDuplicates *int32        `json:"numOfDuplicates,omitempty"`
	Object          *string       `json:"object,omitempty"`
	StatusMsg       *string       `json:"statusMsg,omitempty"`
	TotalExamples   *int32        `json:"totalExamples,omitempty"`
	TotalLabels     *int32        `json:"totalLabels,omitempty"`
	Type            *string       `json:"type,omitempty"`
	UpdatedAt       *time.Time    `json:"updatedAt,omitempty"`
}
