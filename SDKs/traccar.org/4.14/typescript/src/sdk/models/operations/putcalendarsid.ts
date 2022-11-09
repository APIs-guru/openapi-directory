import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCalendarsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCalendarsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCalendarsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Calendar;
}


export class PutCalendarsIdResponse extends SpeakeasyBase {
  @Metadata()
  calendar?: shared.Calendar;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
