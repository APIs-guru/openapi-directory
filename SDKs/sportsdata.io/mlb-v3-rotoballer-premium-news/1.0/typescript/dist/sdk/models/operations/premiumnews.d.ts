import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PremiumNewsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PremiumNewsPathParams extends SpeakeasyBase {
    format: PremiumNewsFormatEnum;
}
export declare class PremiumNewsRequest extends SpeakeasyBase {
    pathParams: PremiumNewsPathParams;
}
export declare class PremiumNewsResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
