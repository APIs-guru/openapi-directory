import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCalendarsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCalendarsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCalendarsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Calendar;
}


export class PutCalendarsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  calendar?: shared.Calendar;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
