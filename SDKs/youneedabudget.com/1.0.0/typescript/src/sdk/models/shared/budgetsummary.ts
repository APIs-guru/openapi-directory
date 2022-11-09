import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";


export class BudgetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: Account[];

  @Metadata({ data: "json, name=currency_format" })
  currencyFormat?: CurrencyFormat;

  @Metadata({ data: "json, name=date_format" })
  dateFormat?: DateFormat;

  @Metadata({ data: "json, name=first_month" })
  firstMonth?: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=last_modified_on" })
  lastModifiedOn?: Date;

  @Metadata({ data: "json, name=last_month" })
  lastMonth?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;
}
