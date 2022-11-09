import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSubContractorsByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
}
export declare class GetSubContractorsByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSubContractorsByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetSubContractorsByEffectiveDatePathParams;
    headers: GetSubContractorsByEffectiveDateHeaders;
}
export declare class GetSubContractorsByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
