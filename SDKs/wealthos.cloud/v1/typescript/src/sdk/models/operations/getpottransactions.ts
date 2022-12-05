import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}

export enum GetPotTransactionsSortEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetPotTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetPotTransactionsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub_transaction_type" })
  subTransactionType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;
}


export class GetPotTransactionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPotTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPotTransactionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetPotTransactionsHeaders;

  @SpeakeasyMetadata()
  security: GetPotTransactionsSecurity;
}


export class GetPotTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPotTransactions200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotTransactions401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotTransactions403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotTransactions404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotTransactions429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getPotTransactions500ApplicationJsonAny?: any;
}
