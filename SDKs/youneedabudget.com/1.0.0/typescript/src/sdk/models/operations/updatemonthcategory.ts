import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateMonthCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: Date;
}


export class UpdateMonthCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMonthCategoryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SaveMonthCategoryWrapper;
}


export class UpdateMonthCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  saveCategoryResponse?: shared.SaveCategoryResponse;

  @Metadata()
  statusCode: number;
}
