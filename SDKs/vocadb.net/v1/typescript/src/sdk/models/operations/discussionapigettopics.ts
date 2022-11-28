import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DiscussionApiGetTopicsFieldsEnum {
    None = "None",
    Comments = "Comments",
    CommentCount = "CommentCount",
    Content = "Content",
    LastComment = "LastComment",
    All = "All"
}

export enum DiscussionApiGetTopicsSortEnum {
    None = "None",
    Name = "Name",
    DateCreated = "DateCreated",
    LastCommentDate = "LastCommentDate"
}


export class DiscussionApiGetTopicsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: DiscussionApiGetTopicsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=folderId" })
  folderId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: DiscussionApiGetTopicsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class DiscussionApiGetTopicsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DiscussionApiGetTopicsQueryParams;
}


export class DiscussionApiGetTopicsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultDiscussionTopicContract?: shared.PartialFindResultDiscussionTopicContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
