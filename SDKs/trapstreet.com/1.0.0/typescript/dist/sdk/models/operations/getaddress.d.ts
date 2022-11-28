import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAddressPathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetAddressRequest extends SpeakeasyBase {
    pathParams: GetAddressPathParams;
}
export declare class GetAddressResponse extends SpeakeasyBase {
    contentType: string;
    getAddress200ApplicationJsonAny?: any;
    statusCode: number;
}
