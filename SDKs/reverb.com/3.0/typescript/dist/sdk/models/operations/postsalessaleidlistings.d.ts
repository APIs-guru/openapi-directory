import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSalesSaleIdListingsPathParams extends SpeakeasyBase {
    saleId: string;
}
export declare class PostSalesSaleIdListingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostSalesSaleIdListingsRequest extends SpeakeasyBase {
    pathParams: PostSalesSaleIdListingsPathParams;
    security: PostSalesSaleIdListingsSecurity;
}
export declare class PostSalesSaleIdListingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
