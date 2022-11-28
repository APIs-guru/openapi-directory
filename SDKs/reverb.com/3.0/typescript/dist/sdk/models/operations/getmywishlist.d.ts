import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyWishlistSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyWishlistRequest extends SpeakeasyBase {
    security: GetMyWishlistSecurity;
}
export declare class GetMyWishlistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
