import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleUpdateStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ArticleId" })
  articleId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userName" })
  userName?: string;
}


export class ArticleUpdateStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ArticleUpdateStatusQueryParams;
}


export class ArticleUpdateStatusResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfInteger?: shared.DefaultResponseDtoOfInteger;

  @Metadata()
  statusCode: number;
}
