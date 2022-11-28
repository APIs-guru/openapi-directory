import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagApiGetCommentsPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class TagApiGetCommentsRequest extends SpeakeasyBase {
    pathParams: TagApiGetCommentsPathParams;
}
export declare class TagApiGetCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;
    statusCode: number;
}
