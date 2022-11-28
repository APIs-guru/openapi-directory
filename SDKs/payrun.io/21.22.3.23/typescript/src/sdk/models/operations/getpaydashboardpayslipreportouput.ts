import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayDashboardPayslipReportOuputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployeeCodes" })
  employeeCodes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PaymentDate" })
  paymentDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PublicationDate" })
  publicationDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransformDefinitionKey" })
  transformDefinitionKey?: string;
}


export class GetPayDashboardPayslipReportOuputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPayDashboardPayslipReportOuputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPayDashboardPayslipReportOuputQueryParams;

  @SpeakeasyMetadata()
  headers: GetPayDashboardPayslipReportOuputHeaders;
}


export class GetPayDashboardPayslipReportOuputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getPayDashboardPayslipReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
