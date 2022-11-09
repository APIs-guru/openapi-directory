import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetComparisonShoppingPagesIdListingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetComparisonShoppingPagesIdListingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=condition" })
  condition: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetComparisonShoppingPagesIdListingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetComparisonShoppingPagesIdListingsPathParams;

  @Metadata()
  queryParams: GetComparisonShoppingPagesIdListingsQueryParams;
}


export class GetComparisonShoppingPagesIdListingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
