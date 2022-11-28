import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CveDetailsCvssv2
/** 
 * CVSS V2 of the CVE
**/
export class CveDetailsCvssv2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseScore" })
  baseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=vector" })
  vector?: string;
}

export enum CveDetailsCvssv3BaseSeverityEnum {
    Critical = "critical",
    High = "high",
    Medium = "medium",
    Low = "low",
    None = "none"
}


// CveDetailsCvssv3
/** 
 * CVSS V3 of the CVE
**/
export class CveDetailsCvssv3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseScore" })
  baseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=baseSeverity" })
  baseSeverity?: CveDetailsCvssv3BaseSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=vector" })
  vector?: string;
}


export class CveDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cvssv2" })
  cvssv2?: CveDetailsCvssv2;

  @SpeakeasyMetadata({ data: "json, name=cvssv3" })
  cvssv3?: CveDetailsCvssv3;

  @SpeakeasyMetadata({ data: "json, name=cweIds" })
  cweIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=publishedDate" })
  publishedDate?: Date;
}
