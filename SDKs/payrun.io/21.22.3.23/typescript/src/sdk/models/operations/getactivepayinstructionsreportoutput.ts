import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetActivePayInstructionsReportOutputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ActiveOn" })
  activeOn?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployeeKey" })
  employeeKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FromDate" })
  fromDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ToDate" })
  toDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: string;
}


export class GetActivePayInstructionsReportOutputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetActivePayInstructionsReportOutputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActivePayInstructionsReportOutputQueryParams;

  @Metadata()
  headers: GetActivePayInstructionsReportOutputHeaders;
}


export class GetActivePayInstructionsReportOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getActivePayInstructionsReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
