import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSyncDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class CreateSyncDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateSyncDocumentCreateSyncDocumentRequest extends SpeakeasyBase {
    data?: any;
    uniqueName?: string;
}
export declare class CreateSyncDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSyncDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSyncDocumentPathParams;
    request?: CreateSyncDocumentCreateSyncDocumentRequest;
    security: CreateSyncDocumentSecurity;
}
export declare class CreateSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
