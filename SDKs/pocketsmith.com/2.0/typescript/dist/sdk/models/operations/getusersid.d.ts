import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdRequest extends SpeakeasyBase {
    pathParams: GetUsersIdPathParams;
}
export declare class GetUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    user?: shared.User;
}
