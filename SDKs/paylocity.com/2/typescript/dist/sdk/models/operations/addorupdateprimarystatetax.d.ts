import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddOrUpdatePrimaryStateTaxPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class AddOrUpdatePrimaryStateTaxSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddOrUpdatePrimaryStateTaxRequest extends SpeakeasyBase {
    pathParams: AddOrUpdatePrimaryStateTaxPathParams;
    request: shared.StateTax;
    security: AddOrUpdatePrimaryStateTaxSecurity;
}
export declare class AddOrUpdatePrimaryStateTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
