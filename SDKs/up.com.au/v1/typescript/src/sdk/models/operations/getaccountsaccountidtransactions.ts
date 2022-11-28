import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsAccountIdTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetAccountsAccountIdTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[category]" })
  filterCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[since]" })
  filterSince?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[status]" })
  filterStatus?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[tag]" })
  filterTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[until]" })
  filterUntil?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;
}


export class GetAccountsAccountIdTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsAccountIdTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountsAccountIdTransactionsQueryParams;
}


export class GetAccountsAccountIdTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTransactionsResponse?: shared.ListTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
