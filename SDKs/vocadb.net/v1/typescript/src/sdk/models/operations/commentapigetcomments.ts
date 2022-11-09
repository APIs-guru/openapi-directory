import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CommentApiGetCommentsEntryTypeEnum {
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


export class CommentApiGetCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=entryType" })
  entryType: CommentApiGetCommentsEntryTypeEnum;
}


export class CommentApiGetCommentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=entryId" })
  entryId: number;
}


export class CommentApiGetCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CommentApiGetCommentsPathParams;

  @Metadata()
  queryParams: CommentApiGetCommentsQueryParams;
}


export class CommentApiGetCommentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;

  @Metadata()
  statusCode: number;
}
