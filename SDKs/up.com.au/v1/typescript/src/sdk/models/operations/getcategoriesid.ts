import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoriesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCategoriesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoriesIdPathParams;
}


export class GetCategoriesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCategoryResponse?: shared.GetCategoryResponse;

  @Metadata()
  statusCode: number;
}
