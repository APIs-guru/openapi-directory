import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[parent]" })
  filterParent?: string;
}


export class GetCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCategoriesQueryParams;
}


export class GetCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCategoriesResponse?: shared.ListCategoriesResponse;

  @Metadata()
  statusCode: number;
}
