import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionAccountsIdTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetTransactionAccountsIdTransactionsTypeEnum {
    Debit = "debit",
    Credit = "credit"
}


export class GetTransactionAccountsIdTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=only_uncategorised" })
  onlyUncategorised?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionAccountsIdTransactionsTypeEnum;
}


export class GetTransactionAccountsIdTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionAccountsIdTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionAccountsIdTransactionsQueryParams;
}


export class GetTransactionAccountsIdTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Transaction })
  transactions?: shared.Transaction[];
}
