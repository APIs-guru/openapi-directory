import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyConversationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMyConversationsIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyConversationsIdRequest extends SpeakeasyBase {
    pathParams: GetMyConversationsIdPathParams;
    security: GetMyConversationsIdSecurity;
}
export declare class GetMyConversationsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
