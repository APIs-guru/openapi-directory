import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersIdCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdCategoriesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=colour" })
  colour?: string;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class PostUsersIdCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersIdCategoriesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostUsersIdCategoriesRequestBody;
}


export class PostUsersIdCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  category?: shared.Category;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
