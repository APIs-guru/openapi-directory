import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FindingsMetaRisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cvss_base_score" })
  cvssBaseScore?: string[];

  @SpeakeasyMetadata({ data: "json, name=cvss_vector" })
  cvssVector?: string[];

  @SpeakeasyMetadata({ data: "json, name=exploit_available" })
  exploitAvailable?: string[];

  @SpeakeasyMetadata({ data: "json, name=exploitability_ease" })
  exploitabilityEase?: string[];

  @SpeakeasyMetadata({ data: "json, name=patch_publication_date" })
  patchPublicationDate?: string[];
}


export class FindingsMetaVulnRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bid" })
  bid?: string[];

  @SpeakeasyMetadata({ data: "json, name=cpe" })
  cpe?: string[];

  @SpeakeasyMetadata({ data: "json, name=cve" })
  cve?: string[];

  @SpeakeasyMetadata({ data: "json, name=cwe" })
  cwe?: string[];
}

export enum FindingsSeverityEnum {
    Info = "info",
    Low = "low",
    Medium = "medium",
    High = "high"
}


export class Findings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=issue_id" })
  issueId?: number;

  @SpeakeasyMetadata({ data: "json, name=meta_links" })
  metaLinks?: string[];

  @SpeakeasyMetadata({ data: "json, name=meta_risk" })
  metaRisk?: FindingsMetaRisk;

  @SpeakeasyMetadata({ data: "json, name=meta_tags" })
  metaTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=meta_vuln_refs" })
  metaVulnRefs?: FindingsMetaVulnRefs;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: FindingsSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=solution" })
  solution?: string;

  @SpeakeasyMetadata({ data: "json, name=target_addrs" })
  targetAddrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=target_proto" })
  targetProto?: string[];

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
