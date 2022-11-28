import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetP32SummaryNetReportOutputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetP32SummaryNetReportOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetP32SummaryNetReportOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetP32SummaryNetReportOutputQueryParams;

  @SpeakeasyMetadata()
  headers: GetP32SummaryNetReportOutputHeaders;
}


export class GetP32SummaryNetReportOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getP32SummaryNetReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
