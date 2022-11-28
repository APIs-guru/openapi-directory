import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCompanySpecificOpenApiDocumentationPathParams extends SpeakeasyBase {
    companyId: string;
}
export declare class GetCompanySpecificOpenApiDocumentationHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetCompanySpecificOpenApiDocumentationSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetCompanySpecificOpenApiDocumentationRequest extends SpeakeasyBase {
    pathParams: GetCompanySpecificOpenApiDocumentationPathParams;
    headers: GetCompanySpecificOpenApiDocumentationHeaders;
    security: GetCompanySpecificOpenApiDocumentationSecurity;
}
export declare class GetCompanySpecificOpenApiDocumentationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
