import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class FindingsMetaRisk extends SpeakeasyBase {
    cvssBaseScore?: string[];
    cvssVector?: string[];
    exploitAvailable?: string[];
    exploitabilityEase?: string[];
    patchPublicationDate?: string[];
}
export declare class FindingsMetaVulnRefs extends SpeakeasyBase {
    bid?: string[];
    cpe?: string[];
    cve?: string[];
    cwe?: string[];
}
export declare enum FindingsSeverityEnum {
    Info = "info",
    Low = "low",
    Medium = "medium",
    High = "high"
}
export declare class Findings extends SpeakeasyBase {
    confidence?: string;
    description?: string;
    issueId?: number;
    metaLinks?: string[];
    metaRisk?: FindingsMetaRisk;
    metaTags?: string[];
    metaVulnRefs?: FindingsMetaVulnRefs;
    raw?: string;
    severity?: FindingsSeverityEnum;
    solution?: string;
    targetAddrs?: string[];
    targetProto?: string[];
    timestamp?: Date;
    title?: string;
    type?: string;
}
