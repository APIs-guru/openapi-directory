import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetActivePayInstructionsReportOutputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ActiveOn" })
  activeOn?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployeeKey" })
  employeeKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FromDate" })
  fromDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ToDate" })
  toDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: string;
}


export class GetActivePayInstructionsReportOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetActivePayInstructionsReportOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActivePayInstructionsReportOutputQueryParams;

  @SpeakeasyMetadata()
  headers: GetActivePayInstructionsReportOutputHeaders;
}


export class GetActivePayInstructionsReportOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getActivePayInstructionsReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
