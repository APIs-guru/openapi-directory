import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProductsReviewsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutProductsReviewsIdRequestBody extends SpeakeasyBase {
    body?: string;
    rating?: number;
    title?: string;
}
export declare class PutProductsReviewsIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PutProductsReviewsIdRequest extends SpeakeasyBase {
    pathParams: PutProductsReviewsIdPathParams;
    request?: PutProductsReviewsIdRequestBody;
    security: PutProductsReviewsIdSecurity;
}
export declare class PutProductsReviewsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
