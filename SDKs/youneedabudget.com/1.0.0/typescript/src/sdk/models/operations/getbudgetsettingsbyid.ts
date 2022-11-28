import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBudgetSettingsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class GetBudgetSettingsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBudgetSettingsByIdPathParams;
}


export class GetBudgetSettingsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  budgetSettingsResponse?: shared.BudgetSettingsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
