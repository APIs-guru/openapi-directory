import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBetHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=exclude" })
  exclude?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=settled" })
  settled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetBetHistoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiTicket" })
  apiTicket: string;
}


export class GetBetHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBetHistoryQueryParams;

  @Metadata()
  headers: GetBetHistoryHeaders;
}


export class GetBetHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  betHistoryResponse?: shared.BetHistoryResponse;

  @Metadata()
  errors?: shared.Errors;
}
