package shared

import (
	"time"
)

type CveDetailsCvssv2 struct {
	BaseScore *int64  `json:"baseScore"`
	Vector    *string `json:"vector"`
}

type CveDetailsCvssv3BaseSeverityEnum string

const (
	CveDetailsCvssv3BaseSeverityEnumCritical CveDetailsCvssv3BaseSeverityEnum = "critical"
	CveDetailsCvssv3BaseSeverityEnumHigh     CveDetailsCvssv3BaseSeverityEnum = "high"
	CveDetailsCvssv3BaseSeverityEnumMedium   CveDetailsCvssv3BaseSeverityEnum = "medium"
	CveDetailsCvssv3BaseSeverityEnumLow      CveDetailsCvssv3BaseSeverityEnum = "low"
	CveDetailsCvssv3BaseSeverityEnumNone     CveDetailsCvssv3BaseSeverityEnum = "none"
)

type CveDetailsCvssv3 struct {
	BaseScore    *float64                          `json:"baseScore"`
	BaseSeverity *CveDetailsCvssv3BaseSeverityEnum `json:"baseSeverity"`
	Vector       *string                           `json:"vector"`
}

type CveDetails struct {
	Cvssv2           *CveDetailsCvssv2 `json:"cvssv2"`
	Cvssv3           *CveDetailsCvssv3 `json:"cvssv3"`
	CweIds           []string          `json:"cweIds"`
	Description      *time.Time        `json:"description"`
	ID               *string           `json:"id"`
	LastModifiedDate *time.Time        `json:"lastModifiedDate"`
	PublishedDate    *time.Time        `json:"publishedDate"`
}
