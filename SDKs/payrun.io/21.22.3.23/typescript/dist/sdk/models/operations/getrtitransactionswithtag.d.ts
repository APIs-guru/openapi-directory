import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRtiTransactionsWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class GetRtiTransactionsWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetRtiTransactionsWithTagRequest extends SpeakeasyBase {
    pathParams: GetRtiTransactionsWithTagPathParams;
    headers: GetRtiTransactionsWithTagHeaders;
}
export declare class GetRtiTransactionsWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
