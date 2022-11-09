import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PremiumNewsByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PremiumNewsByDatePathParams extends SpeakeasyBase {
    date: string;
    format: PremiumNewsByDateFormatEnum;
}
export declare class PremiumNewsByDateRequest extends SpeakeasyBase {
    pathParams: PremiumNewsByDatePathParams;
}
export declare class PremiumNewsByDateResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
