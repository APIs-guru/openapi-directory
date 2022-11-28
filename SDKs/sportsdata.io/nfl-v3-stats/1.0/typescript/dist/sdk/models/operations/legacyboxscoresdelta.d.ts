import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LegacyBoxScoresDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoresDeltaPathParams extends SpeakeasyBase {
    format: LegacyBoxScoresDeltaFormatEnum;
    minutes: string;
    season: string;
    week: string;
}
export declare class LegacyBoxScoresDeltaRequest extends SpeakeasyBase {
    pathParams: LegacyBoxScoresDeltaPathParams;
}
export declare class LegacyBoxScoresDeltaResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
