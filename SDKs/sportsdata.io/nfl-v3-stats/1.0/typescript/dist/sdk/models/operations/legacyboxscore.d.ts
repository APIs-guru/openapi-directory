import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LegacyBoxScoreFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScorePathParams extends SpeakeasyBase {
    format: LegacyBoxScoreFormatEnum;
    hometeam: string;
    season: string;
    week: string;
}
export declare class LegacyBoxScoreRequest extends SpeakeasyBase {
    pathParams: LegacyBoxScorePathParams;
}
export declare class LegacyBoxScoreResponse extends SpeakeasyBase {
    boxScore?: any;
    contentType: string;
    statusCode: number;
}
