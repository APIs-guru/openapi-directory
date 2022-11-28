import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayCodesByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
}
export declare class GetPayCodesByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayCodesByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetPayCodesByEffectiveDatePathParams;
    headers: GetPayCodesByEffectiveDateHeaders;
}
export declare class GetPayCodesByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
