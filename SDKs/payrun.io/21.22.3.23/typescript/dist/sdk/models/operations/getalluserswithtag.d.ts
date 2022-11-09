import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllUsersWithTagPathParams extends SpeakeasyBase {
    tagId: string;
}
export declare class GetAllUsersWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllUsersWithTagRequest extends SpeakeasyBase {
    pathParams: GetAllUsersWithTagPathParams;
    headers: GetAllUsersWithTagHeaders;
}
export declare class GetAllUsersWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
