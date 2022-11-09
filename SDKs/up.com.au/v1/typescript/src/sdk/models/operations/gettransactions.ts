import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[category]" })
  filterCategory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[since]" })
  filterSince?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[status]" })
  filterStatus?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[tag]" })
  filterTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[until]" })
  filterUntil?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTransactionsQueryParams;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTransactionsResponse?: shared.ListTransactionsResponse;

  @Metadata()
  statusCode: number;
}
