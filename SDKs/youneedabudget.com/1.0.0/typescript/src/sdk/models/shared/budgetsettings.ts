import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";


export class BudgetSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_format" })
  currencyFormat: CurrencyFormat;

  @Metadata({ data: "json, name=date_format" })
  dateFormat: DateFormat;
}
