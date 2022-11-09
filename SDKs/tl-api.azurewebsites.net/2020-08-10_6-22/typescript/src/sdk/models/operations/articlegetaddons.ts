import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleGetAddonsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=gymIds" })
  gymIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchText" })
  searchText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ArticleGetAddonsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ArticleGetAddonsQueryParams;
}


export class ArticleGetAddonsResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfListOfArticleSearchDto?: shared.DefaultResponseDtoOfListOfArticleSearchDto;

  @Metadata()
  statusCode: number;
}
