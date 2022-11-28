import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiscussionApiGetTopicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: number;
}

export enum DiscussionApiGetTopicFieldsEnum {
    None = "None",
    Comments = "Comments",
    CommentCount = "CommentCount",
    Content = "Content",
    LastComment = "LastComment",
    All = "All"
}


export class DiscussionApiGetTopicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: DiscussionApiGetTopicFieldsEnum;
}


export class DiscussionApiGetTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DiscussionApiGetTopicPathParams;

  @SpeakeasyMetadata()
  queryParams: DiscussionApiGetTopicQueryParams;
}


export class DiscussionApiGetTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  discussionTopicContract?: shared.DiscussionTopicContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
