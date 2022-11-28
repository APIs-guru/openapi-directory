import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetSettings } from "./budgetsettings";
export declare class BudgetSettingsResponseData extends SpeakeasyBase {
    settings: BudgetSettings;
}
export declare class BudgetSettingsResponse extends SpeakeasyBase {
    data: BudgetSettingsResponseData;
}
