import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetComparisonShoppingPagesIdListingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetComparisonShoppingPagesIdListingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=condition" })
  condition: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetComparisonShoppingPagesIdListingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetComparisonShoppingPagesIdListingsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetComparisonShoppingPagesIdListingsQueryParams;
}


export class GetComparisonShoppingPagesIdListingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
