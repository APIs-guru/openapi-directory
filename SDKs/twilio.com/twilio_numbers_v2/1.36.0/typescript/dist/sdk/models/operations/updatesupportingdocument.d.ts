import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESUPPORTINGDOCUMENT_SERVERS: string[];
export declare class UpdateSupportingDocumentPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateSupportingDocumentUpdateSupportingDocumentRequest extends SpeakeasyBase {
    attributes?: any;
    friendlyName?: string;
}
export declare class UpdateSupportingDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSupportingDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSupportingDocumentPathParams;
    request?: UpdateSupportingDocumentUpdateSupportingDocumentRequest;
    security: UpdateSupportingDocumentSecurity;
}
export declare class UpdateSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceSupportingDocument?: shared.NumbersV2RegulatoryComplianceSupportingDocument;
}
