import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdMessagesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdMessagesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdMessagesGetPathParams;
}


export class StoryIdMessagesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messages?: any[];

  @Metadata()
  problemDetail?: any;
}
