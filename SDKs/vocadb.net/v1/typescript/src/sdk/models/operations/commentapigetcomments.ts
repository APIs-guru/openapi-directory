import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CommentApiGetCommentsEntryTypeEnum {
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


export class CommentApiGetCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entryType" })
  entryType: CommentApiGetCommentsEntryTypeEnum;
}


export class CommentApiGetCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryId" })
  entryId: number;
}


export class CommentApiGetCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CommentApiGetCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: CommentApiGetCommentsQueryParams;
}


export class CommentApiGetCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
