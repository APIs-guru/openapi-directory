import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteRtiTransactionTagPathParams extends SpeakeasyBase {
    employerId: string;
    rtiTransactionId: string;
    tagId: string;
}
export declare class DeleteRtiTransactionTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteRtiTransactionTagRequest extends SpeakeasyBase {
    pathParams: DeleteRtiTransactionTagPathParams;
    headers: DeleteRtiTransactionTagHeaders;
}
export declare class DeleteRtiTransactionTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
