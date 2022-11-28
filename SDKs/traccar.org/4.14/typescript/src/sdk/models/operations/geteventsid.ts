import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetEventsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventsIdPathParams;
}


export class GetEventsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  event?: shared.Event;

  @SpeakeasyMetadata()
  statusCode: number;
}
