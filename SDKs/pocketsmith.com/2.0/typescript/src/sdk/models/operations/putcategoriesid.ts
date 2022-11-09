import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCategoriesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCategoriesIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=colour" })
  colour?: string;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PutCategoriesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCategoriesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutCategoriesIdRequestBody;
}


export class PutCategoriesIdResponse extends SpeakeasyBase {
  @Metadata()
  category?: shared.Category;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
