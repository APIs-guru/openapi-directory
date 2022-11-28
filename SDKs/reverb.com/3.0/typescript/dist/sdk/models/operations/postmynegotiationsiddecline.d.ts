import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyNegotiationsIdDeclinePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostMyNegotiationsIdDeclineSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyNegotiationsIdDeclineRequest extends SpeakeasyBase {
    pathParams: PostMyNegotiationsIdDeclinePathParams;
    security: PostMyNegotiationsIdDeclineSecurity;
}
export declare class PostMyNegotiationsIdDeclineResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
