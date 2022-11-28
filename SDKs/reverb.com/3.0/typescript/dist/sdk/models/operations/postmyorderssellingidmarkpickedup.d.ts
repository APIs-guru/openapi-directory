import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyOrdersSellingIdMarkPickedUpPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostMyOrdersSellingIdMarkPickedUpRequestBody extends SpeakeasyBase {
    date?: string;
}
export declare class PostMyOrdersSellingIdMarkPickedUpSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyOrdersSellingIdMarkPickedUpRequest extends SpeakeasyBase {
    pathParams: PostMyOrdersSellingIdMarkPickedUpPathParams;
    request?: PostMyOrdersSellingIdMarkPickedUpRequestBody;
    security: PostMyOrdersSellingIdMarkPickedUpSecurity;
}
export declare class PostMyOrdersSellingIdMarkPickedUpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
