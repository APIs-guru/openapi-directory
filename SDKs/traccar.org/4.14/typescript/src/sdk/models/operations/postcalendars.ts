import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCalendarsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Calendar;
}


export class PostCalendarsResponse extends SpeakeasyBase {
  @Metadata()
  calendar?: shared.Calendar;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
