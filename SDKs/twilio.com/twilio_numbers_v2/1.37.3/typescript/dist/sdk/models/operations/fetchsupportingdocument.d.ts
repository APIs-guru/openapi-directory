import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSupportingDocumentServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchSupportingDocumentPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSupportingDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSupportingDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSupportingDocumentPathParams;
    security: FetchSupportingDocumentSecurity;
}
export declare class FetchSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceSupportingDocument?: shared.NumbersV2RegulatoryComplianceSupportingDocument;
}
