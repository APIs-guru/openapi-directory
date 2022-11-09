import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutPaySchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;
}


export class PutPayScheduleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutPayScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPaySchedulePathParams;

  @Metadata()
  headers: PutPayScheduleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaySchedule;
}


export class PutPayScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  paySchedule?: shared.PaySchedule;

  @Metadata()
  statusCode: number;
}
