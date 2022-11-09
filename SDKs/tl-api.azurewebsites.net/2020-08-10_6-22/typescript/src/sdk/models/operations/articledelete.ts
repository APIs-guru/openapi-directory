import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ArticleId" })
  articleId?: number;
}


export class ArticleDeleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ArticleDeleteQueryParams;
}


export class ArticleDeleteResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfInteger?: shared.DefaultResponseDtoOfInteger;

  @Metadata()
  statusCode: number;
}
