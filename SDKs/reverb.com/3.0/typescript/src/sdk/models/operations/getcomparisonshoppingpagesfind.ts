import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetComparisonShoppingPagesFindQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;
}


export class GetComparisonShoppingPagesFindRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetComparisonShoppingPagesFindQueryParams;
}


export class GetComparisonShoppingPagesFindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
