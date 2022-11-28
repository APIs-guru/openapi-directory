import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetP11SummaryReportOutputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetP11SummaryReportOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetP11SummaryReportOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetP11SummaryReportOutputQueryParams;

  @SpeakeasyMetadata()
  headers: GetP11SummaryReportOutputHeaders;
}


export class GetP11SummaryReportOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getP11SummaryReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
