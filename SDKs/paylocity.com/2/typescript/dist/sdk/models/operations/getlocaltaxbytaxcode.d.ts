import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocalTaxByTaxCodePathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
    taxCode: string;
}
export declare class GetLocalTaxByTaxCodeSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetLocalTaxByTaxCodeRequest extends SpeakeasyBase {
    pathParams: GetLocalTaxByTaxCodePathParams;
    security: GetLocalTaxByTaxCodeSecurity;
}
export declare class GetLocalTaxByTaxCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
    localTaxes?: shared.LocalTax[];
}
