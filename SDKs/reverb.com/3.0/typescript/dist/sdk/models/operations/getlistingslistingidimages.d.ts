import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingsListingIdImagesPathParams extends SpeakeasyBase {
    listingId: string;
}
export declare class GetListingsListingIdImagesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetListingsListingIdImagesRequest extends SpeakeasyBase {
    pathParams: GetListingsListingIdImagesPathParams;
    security: GetListingsListingIdImagesSecurity;
}
export declare class GetListingsListingIdImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
