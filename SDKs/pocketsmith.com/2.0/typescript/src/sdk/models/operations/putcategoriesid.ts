import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCategoriesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCategoriesIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colour" })
  colour?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PutCategoriesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCategoriesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutCategoriesIdRequestBody;
}


export class PutCategoriesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: shared.Category;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
