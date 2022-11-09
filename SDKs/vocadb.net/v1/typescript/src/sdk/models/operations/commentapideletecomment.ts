import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CommentApiDeleteCommentEntryTypeEnum {
    Undefined = "Undefined"
,    Album = "Album"
,    Artist = "Artist"
,    DiscussionTopic = "DiscussionTopic"
,    Pv = "PV"
,    ReleaseEvent = "ReleaseEvent"
,    ReleaseEventSeries = "ReleaseEventSeries"
,    Song = "Song"
,    SongList = "SongList"
,    Tag = "Tag"
,    User = "User"
,    Venue = "Venue"
}


export class CommentApiDeleteCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=entryType" })
  entryType: CommentApiDeleteCommentEntryTypeEnum;
}


export class CommentApiDeleteCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CommentApiDeleteCommentPathParams;
}


export class CommentApiDeleteCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
