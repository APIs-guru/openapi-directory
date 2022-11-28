import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePensionRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    pensionId: string;
    revisionNumber: string;
}
export declare class DeletePensionRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePensionRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: DeletePensionRevisionByNumberPathParams;
    headers: DeletePensionRevisionByNumberHeaders;
}
export declare class DeletePensionRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
