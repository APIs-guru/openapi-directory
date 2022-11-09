import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetArticlesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_featured" })
  excludeFeatured?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetArticlesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetArticlesQueryParams;
}


export class GetArticlesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
