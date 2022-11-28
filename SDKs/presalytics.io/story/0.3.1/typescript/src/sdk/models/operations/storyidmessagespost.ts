import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdMessagesPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdMessagesPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdMessagesPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class StoryIdMessagesPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
