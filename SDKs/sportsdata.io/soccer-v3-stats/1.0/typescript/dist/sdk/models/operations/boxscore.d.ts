import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BoxScoreFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class BoxScorePathParams extends SpeakeasyBase {
    format: BoxScoreFormatEnum;
    gameid: string;
}
export declare class BoxScoreRequest extends SpeakeasyBase {
    pathParams: BoxScorePathParams;
}
export declare class BoxScoreResponse extends SpeakeasyBase {
    boxScore?: any;
    contentType: string;
    statusCode: number;
}
