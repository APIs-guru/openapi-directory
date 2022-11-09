import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetP11SummaryReportOutputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetP11SummaryReportOutputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetP11SummaryReportOutputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetP11SummaryReportOutputQueryParams;

  @Metadata()
  headers: GetP11SummaryReportOutputHeaders;
}


export class GetP11SummaryReportOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getP11SummaryReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
