import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayDashboardPayslipReportOuputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployeeCodes" })
  employeeCodes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PaymentDate" })
  paymentDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PublicationDate" })
  publicationDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransformDefinitionKey" })
  transformDefinitionKey?: string;
}


export class GetPayDashboardPayslipReportOuputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPayDashboardPayslipReportOuputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPayDashboardPayslipReportOuputQueryParams;

  @Metadata()
  headers: GetPayDashboardPayslipReportOuputHeaders;
}


export class GetPayDashboardPayslipReportOuputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getPayDashboardPayslipReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
