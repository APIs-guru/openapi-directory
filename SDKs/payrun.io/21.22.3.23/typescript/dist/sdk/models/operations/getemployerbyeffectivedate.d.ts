import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployerByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
}
export declare class GetEmployerByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployerByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetEmployerByEffectiveDatePathParams;
    headers: GetEmployerByEffectiveDateHeaders;
}
export declare class GetEmployerByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    employer?: shared.Employer;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
