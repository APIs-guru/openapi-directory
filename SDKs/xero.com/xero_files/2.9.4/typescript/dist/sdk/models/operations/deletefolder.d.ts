import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteFolderPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class DeleteFolderHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class DeleteFolderSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteFolderRequest extends SpeakeasyBase {
    pathParams: DeleteFolderPathParams;
    headers: DeleteFolderHeaders;
    security: DeleteFolderSecurity;
}
export declare class DeleteFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
