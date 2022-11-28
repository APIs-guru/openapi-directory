import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdEventsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdEventsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdEventsGetPathParams;
}


export class StoryIdEventsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];

  @SpeakeasyMetadata()
  problemDetail?: any;
}
