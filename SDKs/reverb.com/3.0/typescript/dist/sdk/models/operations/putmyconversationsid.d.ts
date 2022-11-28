import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMyConversationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutMyConversationsIdRequestBody extends SpeakeasyBase {
    read?: boolean;
}
export declare class PutMyConversationsIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PutMyConversationsIdRequest extends SpeakeasyBase {
    pathParams: PutMyConversationsIdPathParams;
    request?: PutMyConversationsIdRequestBody;
    security: PutMyConversationsIdSecurity;
}
export declare class PutMyConversationsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
