import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLastPayDateReportOuputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployeeKey" })
  employeeKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;
}


export class GetLastPayDateReportOuputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetLastPayDateReportOuputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLastPayDateReportOuputQueryParams;

  @Metadata()
  headers: GetLastPayDateReportOuputHeaders;
}


export class GetLastPayDateReportOuputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getLastPayDateReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
