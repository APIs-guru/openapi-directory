import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutUsersIdRequest extends SpeakeasyBase {
    pathParams: PutUsersIdPathParams;
    request: shared.User;
}
export declare class PutUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
