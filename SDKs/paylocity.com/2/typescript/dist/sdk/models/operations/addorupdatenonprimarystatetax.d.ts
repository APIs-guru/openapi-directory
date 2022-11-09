import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddOrUpdateNonPrimaryStateTaxPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class AddOrUpdateNonPrimaryStateTaxSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddOrUpdateNonPrimaryStateTaxRequest extends SpeakeasyBase {
    pathParams: AddOrUpdateNonPrimaryStateTaxPathParams;
    request: shared.NonPrimaryStateTax;
    security: AddOrUpdateNonPrimaryStateTaxSecurity;
}
export declare class AddOrUpdateNonPrimaryStateTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
