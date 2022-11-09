import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPassReportOuputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DocumentId" })
  documentId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IntermediaryId" })
  intermediaryId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MessageFunctionCode" })
  messageFunctionCode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PaymentDate" })
  paymentDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PensionKey" })
  pensionKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetPassReportOuputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPassReportOuputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPassReportOuputQueryParams;

  @Metadata()
  headers: GetPassReportOuputHeaders;
}


export class GetPassReportOuputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getPassReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
