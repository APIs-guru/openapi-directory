package shared

import (
	"time"
)

type FindingsMetaRisk struct {
	CvssBaseScore        []string `json:"cvss_base_score"`
	CvssVector           []string `json:"cvss_vector"`
	ExploitAvailable     []string `json:"exploit_available"`
	ExploitabilityEase   []string `json:"exploitability_ease"`
	PatchPublicationDate []string `json:"patch_publication_date"`
}

type FindingsMetaVulnRefs struct {
	Bid []string `json:"bid"`
	Cpe []string `json:"cpe"`
	Cve []string `json:"cve"`
	Cwe []string `json:"cwe"`
}

type FindingsSeverityEnum string

const (
	FindingsSeverityEnumInfo   FindingsSeverityEnum = "info"
	FindingsSeverityEnumLow    FindingsSeverityEnum = "low"
	FindingsSeverityEnumMedium FindingsSeverityEnum = "medium"
	FindingsSeverityEnumHigh   FindingsSeverityEnum = "high"
)

type Findings struct {
	Confidence   *string               `json:"confidence"`
	Description  *string               `json:"description"`
	IssueID      *int64                `json:"issue_id"`
	MetaLinks    []string              `json:"meta_links"`
	MetaRisk     *FindingsMetaRisk     `json:"meta_risk"`
	MetaTags     []string              `json:"meta_tags"`
	MetaVulnRefs *FindingsMetaVulnRefs `json:"meta_vuln_refs"`
	Raw          *string               `json:"raw"`
	Severity     *FindingsSeverityEnum `json:"severity"`
	Solution     *string               `json:"solution"`
	TargetAddrs  []string              `json:"target_addrs"`
	TargetProto  []string              `json:"target_proto"`
	Timestamp    *time.Time            `json:"timestamp"`
	Title        *string               `json:"title"`
	Type         *string               `json:"type"`
}
