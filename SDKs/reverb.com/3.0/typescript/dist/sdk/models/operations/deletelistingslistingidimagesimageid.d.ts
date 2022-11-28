import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteListingsListingIdImagesImageIdPathParams extends SpeakeasyBase {
    imageId: string;
    listingId: string;
}
export declare class DeleteListingsListingIdImagesImageIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteListingsListingIdImagesImageIdRequest extends SpeakeasyBase {
    pathParams: DeleteListingsListingIdImagesImageIdPathParams;
    security: DeleteListingsListingIdImagesImageIdSecurity;
}
export declare class DeleteListingsListingIdImagesImageIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
