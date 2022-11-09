import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsIdTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetAccountsIdTransactionsTypeEnum {
    Debit = "debit"
,    Credit = "credit"
}


export class GetAccountsIdTransactionsQueryParams extends SpeakeasyBase {
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
  type?: GetAccountsIdTransactionsTypeEnum;
}


export class GetAccountsIdTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsIdTransactionsPathParams;

  @Metadata()
  queryParams: GetAccountsIdTransactionsQueryParams;
}


export class GetAccountsIdTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Transaction })
  transactions?: shared.Transaction[];
}
