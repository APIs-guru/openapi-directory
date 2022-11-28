import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLocalTaxByTaxCodePathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
    taxCode: string;
}
export declare class DeleteLocalTaxByTaxCodeSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class DeleteLocalTaxByTaxCodeRequest extends SpeakeasyBase {
    pathParams: DeleteLocalTaxByTaxCodePathParams;
    security: DeleteLocalTaxByTaxCodeSecurity;
}
export declare class DeleteLocalTaxByTaxCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
