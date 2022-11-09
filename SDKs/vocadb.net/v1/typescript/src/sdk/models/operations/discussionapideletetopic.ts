import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DiscussionApiDeleteTopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: number;
}


export class DiscussionApiDeleteTopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DiscussionApiDeleteTopicPathParams;
}


export class DiscussionApiDeleteTopicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
