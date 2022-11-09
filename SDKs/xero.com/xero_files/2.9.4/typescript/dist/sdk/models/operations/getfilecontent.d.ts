import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFileContentPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class GetFileContentHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetFileContentSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetFileContentRequest extends SpeakeasyBase {
    pathParams: GetFileContentPathParams;
    headers: GetFileContentHeaders;
    security: GetFileContentSecurity;
}
export declare class GetFileContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFileContent200ApplicationOctetStreamBinaryString?: Uint8Array;
}
