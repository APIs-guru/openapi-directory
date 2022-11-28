import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ArticleId" })
  articleId?: number;
}


export class ArticleDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ArticleDeleteQueryParams;
}


export class ArticleDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfInteger?: shared.DefaultResponseDtoOfInteger;

  @SpeakeasyMetadata()
  statusCode: number;
}
