import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCategoriesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesIdPathParams;
}


export class GetCategoriesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCategoryResponse?: shared.GetCategoryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
