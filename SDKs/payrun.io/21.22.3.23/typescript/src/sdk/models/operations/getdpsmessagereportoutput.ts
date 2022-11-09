import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDpsMessageReportOutputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FromDate" })
  fromDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MessageStatuses" })
  messageStatuses?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MessageTypes" })
  messageTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ToDate" })
  toDate?: Date;
}


export class GetDpsMessageReportOutputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetDpsMessageReportOutputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDpsMessageReportOutputQueryParams;

  @Metadata()
  headers: GetDpsMessageReportOutputHeaders;
}


export class GetDpsMessageReportOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getDpsMessageReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
