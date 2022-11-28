import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPaySchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;
}


export class PutPayScheduleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutPayScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPaySchedulePathParams;

  @SpeakeasyMetadata()
  headers: PutPayScheduleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaySchedule;
}


export class PutPayScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  paySchedule?: shared.PaySchedule;

  @SpeakeasyMetadata()
  statusCode: number;
}
