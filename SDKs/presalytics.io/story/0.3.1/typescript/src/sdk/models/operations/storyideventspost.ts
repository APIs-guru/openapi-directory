import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdEventsPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdEventsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdEventsPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManageEvent;
}


export class StoryIdEventsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  storyIdEventsPost200ApplicationJsonObject?: Map<string, any>;
}
