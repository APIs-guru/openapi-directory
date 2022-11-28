import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleUpdateStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ArticleId" })
  articleId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName?: string;
}


export class ArticleUpdateStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ArticleUpdateStatusQueryParams;
}


export class ArticleUpdateStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfInteger?: shared.DefaultResponseDtoOfInteger;

  @SpeakeasyMetadata()
  statusCode: number;
}
