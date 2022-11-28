import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateSyncDocumentHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateSyncDocumentUpdateSyncDocumentRequest extends SpeakeasyBase {
    data: any;
}
export declare class UpdateSyncDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncDocumentPathParams;
    headers: UpdateSyncDocumentHeaders;
    request?: UpdateSyncDocumentUpdateSyncDocumentRequest;
    security: UpdateSyncDocumentSecurity;
}
export declare class UpdateSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
