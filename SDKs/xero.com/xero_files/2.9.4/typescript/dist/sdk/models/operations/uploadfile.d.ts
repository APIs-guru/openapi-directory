import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadFileQueryParams extends SpeakeasyBase {
    folderId?: string;
}
export declare class UploadFileHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UploadFileRequestBody extends SpeakeasyBase {
    body?: string;
    filename?: string;
    mimeType?: string;
    name?: string;
}
export declare class UploadFileSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UploadFileRequest extends SpeakeasyBase {
    queryParams: UploadFileQueryParams;
    headers: UploadFileHeaders;
    request?: UploadFileRequestBody;
    security: UploadFileSecurity;
}
export declare class UploadFileResponse extends SpeakeasyBase {
    contentType: string;
    fileObject?: shared.FileObject;
    statusCode: number;
}
