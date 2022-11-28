import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DiscussionApiDeleteTopicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: number;
}


export class DiscussionApiDeleteTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DiscussionApiDeleteTopicPathParams;
}


export class DiscussionApiDeleteTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
