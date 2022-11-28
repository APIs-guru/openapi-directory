import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LegacyBoxScoresFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoresPathParams extends SpeakeasyBase {
    format: LegacyBoxScoresFormatEnum;
    season: string;
    week: string;
}
export declare class LegacyBoxScoresRequest extends SpeakeasyBase {
    pathParams: LegacyBoxScoresPathParams;
}
export declare class LegacyBoxScoresResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
