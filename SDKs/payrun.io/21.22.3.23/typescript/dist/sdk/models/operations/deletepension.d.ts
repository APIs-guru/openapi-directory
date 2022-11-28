import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePensionPathParams extends SpeakeasyBase {
    employerId: string;
    pensionId: string;
}
export declare class DeletePensionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePensionRequest extends SpeakeasyBase {
    pathParams: DeletePensionPathParams;
    headers: DeletePensionHeaders;
}
export declare class DeletePensionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
