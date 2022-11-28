import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostConversationsIdOfferPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostConversationsIdOfferRequestBody extends SpeakeasyBase {
    message?: string;
    price: string;
    shippingPrice?: string;
}
export declare class PostConversationsIdOfferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostConversationsIdOfferRequest extends SpeakeasyBase {
    pathParams: PostConversationsIdOfferPathParams;
    request?: PostConversationsIdOfferRequestBody;
    security: PostConversationsIdOfferSecurity;
}
export declare class PostConversationsIdOfferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
