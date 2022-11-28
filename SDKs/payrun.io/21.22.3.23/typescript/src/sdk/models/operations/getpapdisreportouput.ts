import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPapdisReportOuputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransformDefinitionKey" })
  transformDefinitionKey?: string;
}


export class GetPapdisReportOuputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPapdisReportOuputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPapdisReportOuputQueryParams;

  @SpeakeasyMetadata()
  headers: GetPapdisReportOuputHeaders;
}


export class GetPapdisReportOuputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getPapdisReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
