import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmployerSummaryReportOuputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ContextDate" })
  contextDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;
}


export class GetEmployerSummaryReportOuputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployerSummaryReportOuputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEmployerSummaryReportOuputQueryParams;

  @SpeakeasyMetadata()
  headers: GetEmployerSummaryReportOuputHeaders;
}


export class GetEmployerSummaryReportOuputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getEmployerSummaryReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
