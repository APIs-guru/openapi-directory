import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum BoxScoresByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class BoxScoresByDatePathParams extends SpeakeasyBase {
    date: string;
    format: BoxScoresByDateFormatEnum;
}
export declare class BoxScoresByDateRequest extends SpeakeasyBase {
    pathParams: BoxScoresByDatePathParams;
}
export declare class BoxScoresByDateResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
