import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BoxScoresByDateDeltaFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class BoxScoresByDateDeltaPathParams extends SpeakeasyBase {
    date: string;
    format: BoxScoresByDateDeltaFormatEnum;
    minutes: string;
}
export declare class BoxScoresByDateDeltaRequest extends SpeakeasyBase {
    pathParams: BoxScoresByDateDeltaPathParams;
}
export declare class BoxScoresByDateDeltaResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
