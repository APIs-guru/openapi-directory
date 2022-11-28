import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyOrdersBuyingIdMarkReceivedPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostMyOrdersBuyingIdMarkReceivedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyOrdersBuyingIdMarkReceivedRequest extends SpeakeasyBase {
    pathParams: PostMyOrdersBuyingIdMarkReceivedPathParams;
    security: PostMyOrdersBuyingIdMarkReceivedSecurity;
}
export declare class PostMyOrdersBuyingIdMarkReceivedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
