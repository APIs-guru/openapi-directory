import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBudgetSettingsByIdPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class GetBudgetSettingsByIdRequest extends SpeakeasyBase {
    pathParams: GetBudgetSettingsByIdPathParams;
}
export declare class GetBudgetSettingsByIdResponse extends SpeakeasyBase {
    budgetSettingsResponse?: shared.BudgetSettingsResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
