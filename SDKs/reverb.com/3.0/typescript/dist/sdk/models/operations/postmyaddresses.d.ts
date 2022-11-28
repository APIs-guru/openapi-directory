import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyAddressesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyAddressesRequest extends SpeakeasyBase {
    security: PostMyAddressesSecurity;
}
export declare class PostMyAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
