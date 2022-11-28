import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchHostedNumbersAuthorizationDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class FetchHostedNumbersAuthorizationDocumentPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchHostedNumbersAuthorizationDocumentPathParams;
    security: FetchHostedNumbersAuthorizationDocumentSecurity;
}
export declare class FetchHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
