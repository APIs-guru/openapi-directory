import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongListApiGetCommentsPathParams extends SpeakeasyBase {
    listId: number;
}
export declare class SongListApiGetCommentsRequest extends SpeakeasyBase {
    pathParams: SongListApiGetCommentsPathParams;
}
export declare class SongListApiGetCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;
    statusCode: number;
}
