import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PremiumNewsByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PremiumNewsByPlayerPathParams extends SpeakeasyBase {
    format: PremiumNewsByPlayerFormatEnum;
    playerid: string;
}
export declare class PremiumNewsByPlayerRequest extends SpeakeasyBase {
    pathParams: PremiumNewsByPlayerPathParams;
}
export declare class PremiumNewsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
