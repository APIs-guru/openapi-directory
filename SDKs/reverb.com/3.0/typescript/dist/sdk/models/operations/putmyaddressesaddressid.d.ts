import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMyAddressesAddressIdPathParams extends SpeakeasyBase {
    addressId: string;
}
export declare class PutMyAddressesAddressIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PutMyAddressesAddressIdRequest extends SpeakeasyBase {
    pathParams: PutMyAddressesAddressIdPathParams;
    security: PutMyAddressesAddressIdSecurity;
}
export declare class PutMyAddressesAddressIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
