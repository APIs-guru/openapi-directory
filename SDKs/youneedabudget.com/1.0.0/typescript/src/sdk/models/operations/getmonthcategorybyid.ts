import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMonthCategoryByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: Date;
}


export class GetMonthCategoryByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMonthCategoryByIdPathParams;
}


export class GetMonthCategoryByIdResponse extends SpeakeasyBase {
  @Metadata()
  categoryResponse?: shared.CategoryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
