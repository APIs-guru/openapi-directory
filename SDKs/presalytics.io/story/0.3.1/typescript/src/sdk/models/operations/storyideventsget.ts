import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdEventsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdEventsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdEventsGetPathParams;
}


export class StoryIdEventsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];

  @Metadata()
  problemDetail?: any;
}
