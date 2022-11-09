import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionAccountsIdTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetTransactionAccountsIdTransactionsTypeEnum {
    Debit = "debit"
,    Credit = "credit"
}


export class GetTransactionAccountsIdTransactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=only_uncategorised" })
  onlyUncategorised?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTransactionAccountsIdTransactionsTypeEnum;
}


export class GetTransactionAccountsIdTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionAccountsIdTransactionsPathParams;

  @Metadata()
  queryParams: GetTransactionAccountsIdTransactionsQueryParams;
}


export class GetTransactionAccountsIdTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Transaction })
  transactions?: shared.Transaction[];
}
