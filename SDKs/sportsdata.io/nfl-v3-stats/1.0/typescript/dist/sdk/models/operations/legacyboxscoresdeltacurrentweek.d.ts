import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum LegacyBoxScoresDeltaCurrentWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoresDeltaCurrentWeekPathParams extends SpeakeasyBase {
    format: LegacyBoxScoresDeltaCurrentWeekFormatEnum;
    minutes: string;
}
export declare class LegacyBoxScoresDeltaCurrentWeekRequest extends SpeakeasyBase {
    pathParams: LegacyBoxScoresDeltaCurrentWeekPathParams;
}
export declare class LegacyBoxScoresDeltaCurrentWeekResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
