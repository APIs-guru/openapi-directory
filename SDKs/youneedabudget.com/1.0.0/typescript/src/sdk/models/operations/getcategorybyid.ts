import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoryByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;
}


export class GetCategoryByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoryByIdPathParams;
}


export class GetCategoryByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryResponse?: shared.CategoryResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
