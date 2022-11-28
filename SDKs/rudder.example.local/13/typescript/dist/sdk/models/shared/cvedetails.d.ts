import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CVSS V2 of the CVE
**/
export declare class CveDetailsCvssv2 extends SpeakeasyBase {
    baseScore?: number;
    vector?: string;
}
export declare enum CveDetailsCvssv3BaseSeverityEnum {
    Critical = "critical",
    High = "high",
    Medium = "medium",
    Low = "low",
    None = "none"
}
/**
 * CVSS V3 of the CVE
**/
export declare class CveDetailsCvssv3 extends SpeakeasyBase {
    baseScore?: number;
    baseSeverity?: CveDetailsCvssv3BaseSeverityEnum;
    vector?: string;
}
export declare class CveDetails extends SpeakeasyBase {
    cvssv2?: CveDetailsCvssv2;
    cvssv3?: CveDetailsCvssv3;
    cweIds?: string[];
    description?: Date;
    id?: string;
    lastModifiedDate?: Date;
    publishedDate?: Date;
}
