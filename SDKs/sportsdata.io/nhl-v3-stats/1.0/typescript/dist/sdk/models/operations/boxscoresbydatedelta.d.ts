import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum BoxScoresByDateDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
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
