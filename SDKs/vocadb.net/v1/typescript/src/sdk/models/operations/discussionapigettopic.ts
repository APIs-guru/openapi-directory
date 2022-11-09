import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiscussionApiGetTopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: number;
}

export enum DiscussionApiGetTopicFieldsEnum {
    None = "None"
,    Comments = "Comments"
,    CommentCount = "CommentCount"
,    Content = "Content"
,    LastComment = "LastComment"
,    All = "All"
}


export class DiscussionApiGetTopicQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: DiscussionApiGetTopicFieldsEnum;
}


export class DiscussionApiGetTopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DiscussionApiGetTopicPathParams;

  @Metadata()
  queryParams: DiscussionApiGetTopicQueryParams;
}


export class DiscussionApiGetTopicResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  discussionTopicContract?: shared.DiscussionTopicContract;

  @Metadata()
  statusCode: number;
}
