import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetApiPhoneValidateQueryParams extends SpeakeasyBase {
    countryCode?: string;
    telephone: string;
}
export declare class GetApiPhoneValidateHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiPhoneValidateRequest extends SpeakeasyBase {
    queryParams: GetApiPhoneValidateQueryParams;
    headers: GetApiPhoneValidateHeaders;
}
export declare class GetApiPhoneValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
