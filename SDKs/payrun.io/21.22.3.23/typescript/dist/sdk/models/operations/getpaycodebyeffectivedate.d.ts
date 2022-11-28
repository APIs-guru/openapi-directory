import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayCodeByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    payCodeId: string;
}
export declare class GetPayCodeByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayCodeByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetPayCodeByEffectiveDatePathParams;
    headers: GetPayCodeByEffectiveDateHeaders;
}
export declare class GetPayCodeByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payCode?: shared.PayCode;
    statusCode: number;
}
