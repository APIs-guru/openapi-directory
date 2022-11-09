import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateFolderPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class UpdateFolderHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UpdateFolderSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateFolderRequest extends SpeakeasyBase {
    pathParams: UpdateFolderPathParams;
    headers: UpdateFolderHeaders;
    request: any;
    security: UpdateFolderSecurity;
}
export declare class UpdateFolderResponse extends SpeakeasyBase {
    contentType: string;
    folder?: any;
    statusCode: number;
}
