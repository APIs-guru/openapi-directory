import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyAddressesAddressIdPathParams extends SpeakeasyBase {
    addressId: string;
}
export declare class DeleteMyAddressesAddressIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyAddressesAddressIdRequest extends SpeakeasyBase {
    pathParams: DeleteMyAddressesAddressIdPathParams;
    security: DeleteMyAddressesAddressIdSecurity;
}
export declare class DeleteMyAddressesAddressIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
