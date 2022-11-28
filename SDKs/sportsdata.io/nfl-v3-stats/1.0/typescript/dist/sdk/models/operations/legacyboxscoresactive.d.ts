import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LegacyBoxScoresActiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoresActivePathParams extends SpeakeasyBase {
    format: LegacyBoxScoresActiveFormatEnum;
}
export declare class LegacyBoxScoresActiveRequest extends SpeakeasyBase {
    pathParams: LegacyBoxScoresActivePathParams;
}
export declare class LegacyBoxScoresActiveResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
