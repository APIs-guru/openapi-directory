import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VenuesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class VenuesPathParams extends SpeakeasyBase {
    format: VenuesFormatEnum;
}
export declare class VenuesRequest extends SpeakeasyBase {
    pathParams: VenuesPathParams;
}
export declare class VenuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    venues?: any[];
}
