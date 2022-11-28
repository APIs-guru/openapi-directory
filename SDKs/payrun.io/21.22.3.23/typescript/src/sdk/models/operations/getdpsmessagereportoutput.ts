import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDpsMessageReportOutputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FromDate" })
  fromDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageStatuses" })
  messageStatuses?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageTypes" })
  messageTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ToDate" })
  toDate?: Date;
}


export class GetDpsMessageReportOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetDpsMessageReportOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDpsMessageReportOutputQueryParams;

  @SpeakeasyMetadata()
  headers: GetDpsMessageReportOutputHeaders;
}


export class GetDpsMessageReportOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getDpsMessageReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
