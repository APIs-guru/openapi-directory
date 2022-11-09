import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetApiPhoneGenerateQueryParams extends SpeakeasyBase {
    countryCode: string;
    quantity: number;
}
export declare class GetApiPhoneGenerateHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiPhoneGenerateRequest extends SpeakeasyBase {
    queryParams: GetApiPhoneGenerateQueryParams;
    headers: GetApiPhoneGenerateHeaders;
}
export declare class GetApiPhoneGenerateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
