import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BudgetSettings } from "./budgetsettings";


export class BudgetSettingsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings: BudgetSettings;
}


export class BudgetSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: BudgetSettingsResponseData;
}
