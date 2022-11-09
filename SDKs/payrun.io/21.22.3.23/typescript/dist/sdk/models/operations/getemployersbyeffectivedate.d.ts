import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployersByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
}
export declare class GetEmployersByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployersByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetEmployersByEffectiveDatePathParams;
    headers: GetEmployersByEffectiveDateHeaders;
}
export declare class GetEmployersByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
