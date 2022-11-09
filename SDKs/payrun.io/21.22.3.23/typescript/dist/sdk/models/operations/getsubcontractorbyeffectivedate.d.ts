import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSubContractorByEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    subContractorId: string;
}
export declare class GetSubContractorByEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSubContractorByEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetSubContractorByEffectiveDatePathParams;
    headers: GetSubContractorByEffectiveDateHeaders;
}
export declare class GetSubContractorByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    subContractor?: shared.SubContractor;
}
