import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FindingsMetaRisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=cvss_base_score" })
  cvssBaseScore?: string[];

  @Metadata({ data: "json, name=cvss_vector" })
  cvssVector?: string[];

  @Metadata({ data: "json, name=exploit_available" })
  exploitAvailable?: string[];

  @Metadata({ data: "json, name=exploitability_ease" })
  exploitabilityEase?: string[];

  @Metadata({ data: "json, name=patch_publication_date" })
  patchPublicationDate?: string[];
}


export class FindingsMetaVulnRefs extends SpeakeasyBase {
  @Metadata({ data: "json, name=bid" })
  bid?: string[];

  @Metadata({ data: "json, name=cpe" })
  cpe?: string[];

  @Metadata({ data: "json, name=cve" })
  cve?: string[];

  @Metadata({ data: "json, name=cwe" })
  cwe?: string[];
}

export enum FindingsSeverityEnum {
    Info = "info"
,    Low = "low"
,    Medium = "medium"
,    High = "high"
}


export class Findings extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=issue_id" })
  issueId?: number;

  @Metadata({ data: "json, name=meta_links" })
  metaLinks?: string[];

  @Metadata({ data: "json, name=meta_risk" })
  metaRisk?: FindingsMetaRisk;

  @Metadata({ data: "json, name=meta_tags" })
  metaTags?: string[];

  @Metadata({ data: "json, name=meta_vuln_refs" })
  metaVulnRefs?: FindingsMetaVulnRefs;

  @Metadata({ data: "json, name=raw" })
  raw?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: FindingsSeverityEnum;

  @Metadata({ data: "json, name=solution" })
  solution?: string;

  @Metadata({ data: "json, name=target_addrs" })
  targetAddrs?: string[];

  @Metadata({ data: "json, name=target_proto" })
  targetProto?: string[];

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
