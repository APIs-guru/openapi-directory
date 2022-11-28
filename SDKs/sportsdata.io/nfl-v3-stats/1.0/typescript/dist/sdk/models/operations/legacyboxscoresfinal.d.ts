import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LegacyBoxScoresFinalFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoresFinalPathParams extends SpeakeasyBase {
    format: LegacyBoxScoresFinalFormatEnum;
}
export declare class LegacyBoxScoresFinalRequest extends SpeakeasyBase {
    pathParams: LegacyBoxScoresFinalPathParams;
}
export declare class LegacyBoxScoresFinalResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
