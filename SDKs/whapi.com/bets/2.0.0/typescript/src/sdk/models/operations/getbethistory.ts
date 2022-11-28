import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBetHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=exclude" })
  exclude?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=settled" })
  settled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetBetHistoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiTicket" })
  apiTicket: string;
}


export class GetBetHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBetHistoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetBetHistoryHeaders;
}


export class GetBetHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  betHistoryResponse?: shared.BetHistoryResponse;

  @SpeakeasyMetadata()
  errors?: shared.Errors;
}
