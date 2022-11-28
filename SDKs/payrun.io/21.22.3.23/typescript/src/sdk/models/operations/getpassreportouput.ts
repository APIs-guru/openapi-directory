import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPassReportOuputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DocumentId" })
  documentId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IntermediaryId" })
  intermediaryId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageFunctionCode" })
  messageFunctionCode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PaymentDate" })
  paymentDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PensionKey" })
  pensionKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetPassReportOuputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPassReportOuputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPassReportOuputQueryParams;

  @SpeakeasyMetadata()
  headers: GetPassReportOuputHeaders;
}


export class GetPassReportOuputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getPassReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
