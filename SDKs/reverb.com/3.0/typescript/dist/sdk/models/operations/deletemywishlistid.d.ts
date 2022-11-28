import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMyWishlistIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteMyWishlistIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteMyWishlistIdRequest extends SpeakeasyBase {
    pathParams: DeleteMyWishlistIdPathParams;
    security: DeleteMyWishlistIdSecurity;
}
export declare class DeleteMyWishlistIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
