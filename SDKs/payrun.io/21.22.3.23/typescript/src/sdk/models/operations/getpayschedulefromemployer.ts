import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayScheduleFromEmployerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;
}


export class GetPayScheduleFromEmployerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPayScheduleFromEmployerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayScheduleFromEmployerPathParams;

  @SpeakeasyMetadata()
  headers: GetPayScheduleFromEmployerHeaders;
}


export class GetPayScheduleFromEmployerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  paySchedule?: shared.PaySchedule;

  @SpeakeasyMetadata()
  statusCode: number;
}
