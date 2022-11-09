import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteEmployerRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    revisionNumber: string;
}
export declare class DeleteEmployerRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployerRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: DeleteEmployerRevisionByNumberPathParams;
    headers: DeleteEmployerRevisionByNumberHeaders;
}
export declare class DeleteEmployerRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
