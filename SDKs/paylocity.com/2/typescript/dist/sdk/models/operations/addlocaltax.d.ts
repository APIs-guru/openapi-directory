import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddLocalTaxPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class AddLocalTaxSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddLocalTaxRequest extends SpeakeasyBase {
    pathParams: AddLocalTaxPathParams;
    request: shared.LocalTax;
    security: AddLocalTaxSecurity;
}
export declare class AddLocalTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
