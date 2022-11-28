import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";



export class BudgetSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_format" })
  currencyFormat: CurrencyFormat;

  @SpeakeasyMetadata({ data: "json, name=date_format" })
  dateFormat: DateFormat;
}
