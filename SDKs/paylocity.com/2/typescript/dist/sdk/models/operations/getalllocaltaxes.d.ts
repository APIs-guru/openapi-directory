import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllLocalTaxesPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class GetAllLocalTaxesSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetAllLocalTaxesRequest extends SpeakeasyBase {
    pathParams: GetAllLocalTaxesPathParams;
    security: GetAllLocalTaxesSecurity;
}
export declare class GetAllLocalTaxesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
    localTaxes?: shared.LocalTax[];
}
