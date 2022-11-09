import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPensionsByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
}
export declare class GetPensionsByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPensionsByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetPensionsByEffectiveDatePathParams;
    headers: GetPensionsByEffectiveDateHeaders;
}
export declare class GetPensionsByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
