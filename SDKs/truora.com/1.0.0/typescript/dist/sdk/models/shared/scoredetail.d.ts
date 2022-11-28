import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScoreDetailResultEnum {
    Pending = "pending",
    Found = "found",
    NotFound = "not_found",
    Error = "error",
    Delayed = "delayed",
    Ignored = "ignored"
}
export declare enum ScoreDetailSeverityEnum {
    Unknown = "unknown",
    None = "none",
    VeryLow = "very_low",
    Low = "low",
    Medium = "medium",
    High = "high",
    VeryHigh = "very_high"
}
/**
 * Represents score detail of a background check
**/
export declare class ScoreDetail extends SpeakeasyBase {
    result: ScoreDetailResultEnum;
    score: number;
    severity: ScoreDetailSeverityEnum;
}
