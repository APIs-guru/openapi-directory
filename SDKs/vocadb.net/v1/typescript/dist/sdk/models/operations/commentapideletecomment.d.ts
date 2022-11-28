import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CommentApiDeleteCommentEntryTypeEnum {
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
export declare class CommentApiDeleteCommentPathParams extends SpeakeasyBase {
    commentId: number;
    entryType: CommentApiDeleteCommentEntryTypeEnum;
}
export declare class CommentApiDeleteCommentRequest extends SpeakeasyBase {
    pathParams: CommentApiDeleteCommentPathParams;
}
export declare class CommentApiDeleteCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
