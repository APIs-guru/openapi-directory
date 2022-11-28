import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNetPayReportOutputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxPeriod" })
  taxPeriod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetNetPayReportOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetNetPayReportOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNetPayReportOutputQueryParams;

  @SpeakeasyMetadata()
  headers: GetNetPayReportOutputHeaders;
}


export class GetNetPayReportOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getNetPayReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
