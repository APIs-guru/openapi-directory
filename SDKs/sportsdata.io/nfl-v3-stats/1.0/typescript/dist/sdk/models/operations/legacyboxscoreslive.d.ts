import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum LegacyBoxScoresLiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoresLivePathParams extends SpeakeasyBase {
    format: LegacyBoxScoresLiveFormatEnum;
}
export declare class LegacyBoxScoresLiveRequest extends SpeakeasyBase {
    pathParams: LegacyBoxScoresLivePathParams;
}
export declare class LegacyBoxScoresLiveResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
