import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteThirdPartyJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DeleteThirdPartyJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteThirdPartyJobRequest extends SpeakeasyBase {
    pathParams: DeleteThirdPartyJobPathParams;
    headers: DeleteThirdPartyJobHeaders;
}
export declare class DeleteThirdPartyJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
