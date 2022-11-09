import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPensionByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    pensionId: string;
}
export declare class GetPensionByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPensionByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetPensionByEffectiveDatePathParams;
    headers: GetPensionByEffectiveDateHeaders;
}
export declare class GetPensionByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    pension?: shared.Pension;
    statusCode: number;
}
