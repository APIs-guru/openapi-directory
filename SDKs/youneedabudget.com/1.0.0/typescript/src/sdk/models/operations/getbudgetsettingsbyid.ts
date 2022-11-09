import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBudgetSettingsByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetBudgetSettingsByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBudgetSettingsByIdPathParams;
}


export class GetBudgetSettingsByIdResponse extends SpeakeasyBase {
  @Metadata()
  budgetSettingsResponse?: shared.BudgetSettingsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
