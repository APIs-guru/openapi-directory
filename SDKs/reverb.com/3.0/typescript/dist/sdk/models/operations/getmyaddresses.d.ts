import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyAddressesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyAddressesRequest extends SpeakeasyBase {
    security: GetMyAddressesSecurity;
}
export declare class GetMyAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
