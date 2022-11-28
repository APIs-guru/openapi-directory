import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFolderPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class GetFolderHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetFolderSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetFolderRequest extends SpeakeasyBase {
    pathParams: GetFolderPathParams;
    headers: GetFolderHeaders;
    security: GetFolderSecurity;
}
export declare class GetFolderResponse extends SpeakeasyBase {
    contentType: string;
    folder?: any;
    statusCode: number;
}
