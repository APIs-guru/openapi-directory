package shared

import (
	"time"
)

// CveDetailsCvssv2
// CVSS V2 of the CVE
type CveDetailsCvssv2 struct {
	BaseScore *int64  `json:"baseScore,omitempty"`
	Vector    *string `json:"vector,omitempty"`
}

type CveDetailsCvssv3BaseSeverityEnum string

const (
	CveDetailsCvssv3BaseSeverityEnumCritical CveDetailsCvssv3BaseSeverityEnum = "critical"
	CveDetailsCvssv3BaseSeverityEnumHigh     CveDetailsCvssv3BaseSeverityEnum = "high"
	CveDetailsCvssv3BaseSeverityEnumMedium   CveDetailsCvssv3BaseSeverityEnum = "medium"
	CveDetailsCvssv3BaseSeverityEnumLow      CveDetailsCvssv3BaseSeverityEnum = "low"
	CveDetailsCvssv3BaseSeverityEnumNone     CveDetailsCvssv3BaseSeverityEnum = "none"
)

// CveDetailsCvssv3
// CVSS V3 of the CVE
type CveDetailsCvssv3 struct {
	BaseScore    *float64                          `json:"baseScore,omitempty"`
	BaseSeverity *CveDetailsCvssv3BaseSeverityEnum `json:"baseSeverity,omitempty"`
	Vector       *string                           `json:"vector,omitempty"`
}

type CveDetails struct {
	Cvssv2           *CveDetailsCvssv2 `json:"cvssv2,omitempty"`
	Cvssv3           *CveDetailsCvssv3 `json:"cvssv3,omitempty"`
	CweIds           []string          `json:"cweIds,omitempty"`
	Description      *time.Time        `json:"description,omitempty"`
	ID               *string           `json:"id,omitempty"`
	LastModifiedDate *time.Time        `json:"lastModifiedDate,omitempty"`
	PublishedDate    *time.Time        `json:"publishedDate,omitempty"`
}
