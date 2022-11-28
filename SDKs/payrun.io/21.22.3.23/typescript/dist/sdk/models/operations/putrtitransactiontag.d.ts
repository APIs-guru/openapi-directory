import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRtiTransactionTagPathParams extends SpeakeasyBase {
    employerId: string;
    rtiTransactionId: string;
    tagId: string;
}
export declare class PutRtiTransactionTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutRtiTransactionTagRequest extends SpeakeasyBase {
    pathParams: PutRtiTransactionTagPathParams;
    headers: PutRtiTransactionTagHeaders;
}
export declare class PutRtiTransactionTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
