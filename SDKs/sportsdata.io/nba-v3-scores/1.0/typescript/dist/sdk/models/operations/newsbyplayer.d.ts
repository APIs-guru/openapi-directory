import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NewsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class NewsByPlayerPathParams extends SpeakeasyBase {
    format: NewsByPlayerFormatEnum;
    playerid: string;
}
export declare class NewsByPlayerRequest extends SpeakeasyBase {
    pathParams: NewsByPlayerPathParams;
}
export declare class NewsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
