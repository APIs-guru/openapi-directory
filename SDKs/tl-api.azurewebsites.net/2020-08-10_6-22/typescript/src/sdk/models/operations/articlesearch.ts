import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activeStatus" })
  activeStatus?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gymId" })
  gymId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchText" })
  searchText?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ArticleSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ArticleSearchQueryParams;
}


export class ArticleSearchResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfListOfArticleSearchDto?: shared.DefaultResponseDtoOfListOfArticleSearchDto;

  @Metadata()
  statusCode: number;
}
