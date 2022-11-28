import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetSettings } from "./budgetsettings";



export class BudgetSettingsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings: BudgetSettings;
}


export class BudgetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: BudgetSettingsResponseData;
}
