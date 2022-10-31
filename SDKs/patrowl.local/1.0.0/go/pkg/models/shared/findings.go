package shared

import (
	"time"
)

type FindingsMetaRisk struct {
	CvssBaseScore        []string `json:"cvss_base_score,omitempty"`
	CvssVector           []string `json:"cvss_vector,omitempty"`
	ExploitAvailable     []string `json:"exploit_available,omitempty"`
	ExploitabilityEase   []string `json:"exploitability_ease,omitempty"`
	PatchPublicationDate []string `json:"patch_publication_date,omitempty"`
}

type FindingsMetaVulnRefs struct {
	Bid []string `json:"bid,omitempty"`
	Cpe []string `json:"cpe,omitempty"`
	Cve []string `json:"cve,omitempty"`
	Cwe []string `json:"cwe,omitempty"`
}

type FindingsSeverityEnum string

const (
	FindingsSeverityEnumInfo   FindingsSeverityEnum = "info"
	FindingsSeverityEnumLow    FindingsSeverityEnum = "low"
	FindingsSeverityEnumMedium FindingsSeverityEnum = "medium"
	FindingsSeverityEnumHigh   FindingsSeverityEnum = "high"
)

type Findings struct {
	Confidence   *string               `json:"confidence,omitempty"`
	Description  *string               `json:"description,omitempty"`
	IssueID      *int64                `json:"issue_id,omitempty"`
	MetaLinks    []string              `json:"meta_links,omitempty"`
	MetaRisk     *FindingsMetaRisk     `json:"meta_risk,omitempty"`
	MetaTags     []string              `json:"meta_tags,omitempty"`
	MetaVulnRefs *FindingsMetaVulnRefs `json:"meta_vuln_refs,omitempty"`
	Raw          *string               `json:"raw,omitempty"`
	Severity     *FindingsSeverityEnum `json:"severity,omitempty"`
	Solution     *string               `json:"solution,omitempty"`
	TargetAddrs  []string              `json:"target_addrs,omitempty"`
	TargetProto  []string              `json:"target_proto,omitempty"`
	Timestamp    *time.Time            `json:"timestamp,omitempty"`
	Title        *string               `json:"title,omitempty"`
	Type         *string               `json:"type,omitempty"`
}
