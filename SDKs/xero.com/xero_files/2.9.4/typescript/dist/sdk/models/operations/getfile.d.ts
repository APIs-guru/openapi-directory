import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFilePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class GetFileHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetFileSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetFileRequest extends SpeakeasyBase {
    pathParams: GetFilePathParams;
    headers: GetFileHeaders;
    security: GetFileSecurity;
}
export declare class GetFileResponse extends SpeakeasyBase {
    contentType: string;
    fileObject?: shared.FileObject;
    statusCode: number;
}
