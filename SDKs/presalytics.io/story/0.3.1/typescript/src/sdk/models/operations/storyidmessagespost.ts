import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdMessagesPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdMessagesPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdMessagesPostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class StoryIdMessagesPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
