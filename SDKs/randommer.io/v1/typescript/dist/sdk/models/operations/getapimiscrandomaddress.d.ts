import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiMiscRandomAddressQueryParams extends SpeakeasyBase {
    culture?: string;
    number: number;
}
export declare class GetApiMiscRandomAddressHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiMiscRandomAddressRequest extends SpeakeasyBase {
    queryParams: GetApiMiscRandomAddressQueryParams;
    headers: GetApiMiscRandomAddressHeaders;
}
export declare class GetApiMiscRandomAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
