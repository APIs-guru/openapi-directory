import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DiscussionApiGetTopicsFieldsEnum {
    None = "None"
,    Comments = "Comments"
,    CommentCount = "CommentCount"
,    Content = "Content"
,    LastComment = "LastComment"
,    All = "All"
}

export enum DiscussionApiGetTopicsSortEnum {
    None = "None"
,    Name = "Name"
,    DateCreated = "DateCreated"
,    LastCommentDate = "LastCommentDate"
}


export class DiscussionApiGetTopicsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: DiscussionApiGetTopicsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=folderId" })
  folderId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: DiscussionApiGetTopicsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class DiscussionApiGetTopicsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DiscussionApiGetTopicsQueryParams;
}


export class DiscussionApiGetTopicsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultDiscussionTopicContract?: shared.PartialFindResultDiscussionTopicContract;

  @Metadata()
  statusCode: number;
}
