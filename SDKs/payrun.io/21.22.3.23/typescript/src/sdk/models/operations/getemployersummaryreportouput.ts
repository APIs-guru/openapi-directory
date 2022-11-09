import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployerSummaryReportOuputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ContextDate" })
  contextDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;
}


export class GetEmployerSummaryReportOuputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployerSummaryReportOuputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEmployerSummaryReportOuputQueryParams;

  @Metadata()
  headers: GetEmployerSummaryReportOuputHeaders;
}


export class GetEmployerSummaryReportOuputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getEmployerSummaryReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
