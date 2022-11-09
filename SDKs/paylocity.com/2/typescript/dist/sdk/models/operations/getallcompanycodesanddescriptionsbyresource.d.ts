import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllCompanyCodesAndDescriptionsByResourcePathParams extends SpeakeasyBase {
    codeResource: string;
    companyId: string;
}
export declare class GetAllCompanyCodesAndDescriptionsByResourceSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetAllCompanyCodesAndDescriptionsByResourceRequest extends SpeakeasyBase {
    pathParams: GetAllCompanyCodesAndDescriptionsByResourcePathParams;
    security: GetAllCompanyCodesAndDescriptionsByResourceSecurity;
}
export declare class GetAllCompanyCodesAndDescriptionsByResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    companyCodes?: shared.CompanyCodes[];
    errors?: shared.Error[];
}
