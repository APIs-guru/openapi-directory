import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCisLinePathParams extends SpeakeasyBase {
    cisLineId: string;
    employerId: string;
    subContractorId: string;
}
export declare class DeleteCisLineHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteCisLineRequest extends SpeakeasyBase {
    pathParams: DeleteCisLinePathParams;
    headers: DeleteCisLineHeaders;
}
export declare class DeleteCisLineResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
