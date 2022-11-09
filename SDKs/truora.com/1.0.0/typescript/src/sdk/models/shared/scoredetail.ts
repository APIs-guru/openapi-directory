import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScoreDetailResultEnum {
    Pending = "pending"
,    Found = "found"
,    NotFound = "not_found"
,    Error = "error"
,    Delayed = "delayed"
,    Ignored = "ignored"
}

export enum ScoreDetailSeverityEnum {
    Unknown = "unknown"
,    None = "none"
,    VeryLow = "very_low"
,    Low = "low"
,    Medium = "medium"
,    High = "high"
,    VeryHigh = "very_high"
}


// ScoreDetail
/** 
 * Represents score detail of a background check
**/
export class ScoreDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result: ScoreDetailResultEnum;

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=severity" })
  severity: ScoreDetailSeverityEnum;
}
