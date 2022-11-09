import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSUPPORTINGDOCUMENTTYPE_SERVERS: string[];
export declare class FetchSupportingDocumentTypePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSupportingDocumentTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSupportingDocumentTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSupportingDocumentTypePathParams;
    security: FetchSupportingDocumentTypeSecurity;
}
export declare class FetchSupportingDocumentTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceSupportingDocumentType?: shared.NumbersV2RegulatoryComplianceSupportingDocumentType;
}
