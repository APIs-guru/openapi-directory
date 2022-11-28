import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllEarningsPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class GetAllEarningsSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetAllEarningsRequest extends SpeakeasyBase {
    pathParams: GetAllEarningsPathParams;
    security: GetAllEarningsSecurity;
}
export declare class GetAllEarningsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    earnings?: shared.Earning[];
    errors?: shared.Error[];
}
