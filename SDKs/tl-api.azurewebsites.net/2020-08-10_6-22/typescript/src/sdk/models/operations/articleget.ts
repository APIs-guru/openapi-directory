import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=articleID" })
  articleId: number;
}


export class ArticleGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArticleGetPathParams;
}


export class ArticleGetResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfArticleDto?: shared.DefaultResponseDtoOfArticleDto;

  @Metadata()
  statusCode: number;
}
