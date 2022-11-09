import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CveDetailsCvssv2
/** 
 * CVSS V2 of the CVE
**/
export class CveDetailsCvssv2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseScore" })
  baseScore?: number;

  @Metadata({ data: "json, name=vector" })
  vector?: string;
}

export enum CveDetailsCvssv3BaseSeverityEnum {
    Critical = "critical"
,    High = "high"
,    Medium = "medium"
,    Low = "low"
,    None = "none"
}


// CveDetailsCvssv3
/** 
 * CVSS V3 of the CVE
**/
export class CveDetailsCvssv3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseScore" })
  baseScore?: number;

  @Metadata({ data: "json, name=baseSeverity" })
  baseSeverity?: CveDetailsCvssv3BaseSeverityEnum;

  @Metadata({ data: "json, name=vector" })
  vector?: string;
}


export class CveDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cvssv2" })
  cvssv2?: CveDetailsCvssv2;

  @Metadata({ data: "json, name=cvssv3" })
  cvssv3?: CveDetailsCvssv3;

  @Metadata({ data: "json, name=cweIds" })
  cweIds?: string[];

  @Metadata({ data: "json, name=description" })
  description?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=publishedDate" })
  publishedDate?: Date;
}
