import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=articleID" })
  articleId: number;
}


export class ArticleGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleGetPathParams;
}


export class ArticleGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: shared.ApiResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfArticleDto?: shared.DefaultResponseDtoOfArticleDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
