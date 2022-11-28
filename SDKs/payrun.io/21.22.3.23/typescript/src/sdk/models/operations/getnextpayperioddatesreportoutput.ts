import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNextPayPeriodDatesReportOutputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;
}


export class GetNextPayPeriodDatesReportOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetNextPayPeriodDatesReportOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNextPayPeriodDatesReportOutputQueryParams;

  @SpeakeasyMetadata()
  headers: GetNextPayPeriodDatesReportOutputHeaders;
}


export class GetNextPayPeriodDatesReportOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getNextPayPeriodDatesReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
