import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyNegotiationsIdAcceptPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostMyNegotiationsIdAcceptRequestBody extends SpeakeasyBase {
    message?: string;
}
export declare class PostMyNegotiationsIdAcceptSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyNegotiationsIdAcceptRequest extends SpeakeasyBase {
    pathParams: PostMyNegotiationsIdAcceptPathParams;
    request?: PostMyNegotiationsIdAcceptRequestBody;
    security: PostMyNegotiationsIdAcceptSecurity;
}
export declare class PostMyNegotiationsIdAcceptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
