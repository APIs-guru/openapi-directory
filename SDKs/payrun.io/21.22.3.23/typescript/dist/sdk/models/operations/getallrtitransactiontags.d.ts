import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllRtiTransactionTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllRtiTransactionTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllRtiTransactionTagsRequest extends SpeakeasyBase {
    pathParams: GetAllRtiTransactionTagsPathParams;
    headers: GetAllRtiTransactionTagsHeaders;
}
export declare class GetAllRtiTransactionTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
