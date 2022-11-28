import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsQueryParams extends SpeakeasyBase {
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


export class GetTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTransactionsQueryParams;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTransactionsResponse?: shared.ListTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
