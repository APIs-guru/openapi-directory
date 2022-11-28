import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostListingsIdOfferPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostListingsIdOfferRequestBody extends SpeakeasyBase {
    message?: string;
    price: string;
    shippingPrice?: string;
}
export declare class PostListingsIdOfferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostListingsIdOfferRequest extends SpeakeasyBase {
    pathParams: PostListingsIdOfferPathParams;
    request?: PostListingsIdOfferRequestBody;
    security: PostListingsIdOfferSecurity;
}
export declare class PostListingsIdOfferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
