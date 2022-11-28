import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";



export class BudgetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: Account })
  accounts?: Account[];

  @SpeakeasyMetadata({ data: "json, name=currency_format" })
  currencyFormat?: CurrencyFormat;

  @SpeakeasyMetadata({ data: "json, name=date_format" })
  dateFormat?: DateFormat;

  @SpeakeasyMetadata({ data: "json, name=first_month" })
  firstMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified_on" })
  lastModifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_month" })
  lastMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
