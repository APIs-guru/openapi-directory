import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMonthCategoryByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: Date;
}


export class GetMonthCategoryByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMonthCategoryByIdPathParams;
}


export class GetMonthCategoryByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryResponse?: shared.CategoryResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
