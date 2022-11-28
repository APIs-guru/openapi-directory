import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMyWishlistIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutMyWishlistIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PutMyWishlistIdRequest extends SpeakeasyBase {
    pathParams: PutMyWishlistIdPathParams;
    security: PutMyWishlistIdSecurity;
}
export declare class PutMyWishlistIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
