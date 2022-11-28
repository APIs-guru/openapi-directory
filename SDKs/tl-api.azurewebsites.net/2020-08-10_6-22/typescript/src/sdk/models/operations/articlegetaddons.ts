import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleGetAddonsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gymIds" })
  gymIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchText" })
  searchText?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ArticleGetAddonsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ArticleGetAddonsQueryParams;
}


export class ArticleGetAddonsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: shared.ApiResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfListOfArticleSearchDto?: shared.DefaultResponseDtoOfListOfArticleSearchDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
