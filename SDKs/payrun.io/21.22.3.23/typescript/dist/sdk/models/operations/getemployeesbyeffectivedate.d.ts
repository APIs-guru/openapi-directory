import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployeesByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
}
export declare class GetEmployeesByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeesByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetEmployeesByEffectiveDatePathParams;
    headers: GetEmployeesByEffectiveDateHeaders;
}
export declare class GetEmployeesByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
