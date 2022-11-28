import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFolderPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFolderQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetFolderSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFolderRequest extends SpeakeasyBase {
    pathParams: GetFolderPathParams;
    queryParams: GetFolderQueryParams;
    security: GetFolderSecurity;
}
export declare class GetFolderResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
