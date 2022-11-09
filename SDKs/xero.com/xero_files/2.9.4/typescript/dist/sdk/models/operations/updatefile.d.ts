import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateFilePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class UpdateFileHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UpdateFileSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateFileRequest extends SpeakeasyBase {
    pathParams: UpdateFilePathParams;
    headers: UpdateFileHeaders;
    request?: shared.FileObject;
    security: UpdateFileSecurity;
}
export declare class UpdateFileResponse extends SpeakeasyBase {
    contentType: string;
    fileObject?: shared.FileObject;
    statusCode: number;
}
