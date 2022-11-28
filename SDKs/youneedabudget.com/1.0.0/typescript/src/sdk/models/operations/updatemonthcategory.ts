import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateMonthCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: Date;
}


export class UpdateMonthCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMonthCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SaveMonthCategoryWrapper;
}


export class UpdateMonthCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  saveCategoryResponse?: shared.SaveCategoryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
