import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoryByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;
}


export class GetCategoryByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoryByIdPathParams;
}


export class GetCategoryByIdResponse extends SpeakeasyBase {
  @Metadata()
  categoryResponse?: shared.CategoryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
