import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetComparisonShoppingPagesFindQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;
}


export class GetComparisonShoppingPagesFindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetComparisonShoppingPagesFindQueryParams;
}


export class GetComparisonShoppingPagesFindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
