import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersIdCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdCategoriesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colour" })
  colour?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class PostUsersIdCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersIdCategoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostUsersIdCategoriesRequestBody;
}


export class PostUsersIdCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: shared.Category;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
