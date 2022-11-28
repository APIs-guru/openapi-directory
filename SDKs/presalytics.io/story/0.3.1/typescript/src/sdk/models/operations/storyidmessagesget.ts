import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdMessagesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdMessagesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdMessagesGetPathParams;
}


export class StoryIdMessagesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messages?: any[];

  @SpeakeasyMetadata()
  problemDetail?: any;
}
