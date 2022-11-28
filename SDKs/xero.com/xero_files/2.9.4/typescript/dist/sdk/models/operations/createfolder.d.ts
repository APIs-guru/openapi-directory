import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFolderHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateFolderSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateFolderRequest extends SpeakeasyBase {
    headers: CreateFolderHeaders;
    request?: any;
    security: CreateFolderSecurity;
}
export declare class CreateFolderResponse extends SpeakeasyBase {
    contentType: string;
    folder?: any;
    statusCode: number;
}
