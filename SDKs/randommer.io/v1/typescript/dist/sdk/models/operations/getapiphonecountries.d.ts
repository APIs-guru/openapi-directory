import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetApiPhoneCountriesHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiPhoneCountriesRequest extends SpeakeasyBase {
    headers: GetApiPhoneCountriesHeaders;
}
export declare class GetApiPhoneCountriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
