import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdEventsPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdEventsPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdEventsPostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ManageEvent;
}


export class StoryIdEventsPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  storyIdEventsPost200ApplicationJsonObject?: Map<string, any>;
}
