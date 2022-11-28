import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CommentApiGetCommentsEntryTypeEnum {
    Undefined = "Undefined",
    Album = "Album",
    Artist = "Artist",
    DiscussionTopic = "DiscussionTopic",
    Pv = "PV",
    ReleaseEvent = "ReleaseEvent",
    ReleaseEventSeries = "ReleaseEventSeries",
    Song = "Song",
    SongList = "SongList",
    Tag = "Tag",
    User = "User",
    Venue = "Venue"
}
export declare class CommentApiGetCommentsPathParams extends SpeakeasyBase {
    entryType: CommentApiGetCommentsEntryTypeEnum;
}
export declare class CommentApiGetCommentsQueryParams extends SpeakeasyBase {
    entryId: number;
}
export declare class CommentApiGetCommentsRequest extends SpeakeasyBase {
    pathParams: CommentApiGetCommentsPathParams;
    queryParams: CommentApiGetCommentsQueryParams;
}
export declare class CommentApiGetCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;
    statusCode: number;
}
