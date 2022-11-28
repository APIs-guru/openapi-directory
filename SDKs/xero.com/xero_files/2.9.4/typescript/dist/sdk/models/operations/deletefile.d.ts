import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFilePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DeleteFileHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class DeleteFileSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteFileRequest extends SpeakeasyBase {
    pathParams: DeleteFilePathParams;
    headers: DeleteFileHeaders;
    security: DeleteFileSecurity;
}
export declare class DeleteFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
