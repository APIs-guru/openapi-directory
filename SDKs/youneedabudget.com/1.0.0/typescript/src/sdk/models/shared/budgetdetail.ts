import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Category } from "./category";
import { CategoryGroup } from "./categorygroup";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";
import { MonthDetail } from "./monthdetail";
import { PayeeLocation } from "./payeelocation";
import { Payee } from "./payee";
import { ScheduledSubTransaction } from "./scheduledsubtransaction";
import { ScheduledTransactionSummary } from "./scheduledtransactionsummary";
import { SubTransaction } from "./subtransaction";
import { TransactionSummary } from "./transactionsummary";



export class BudgetDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: Account })
  accounts?: Account[];

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=category_groups", elemType: CategoryGroup })
  categoryGroups?: CategoryGroup[];

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

  @SpeakeasyMetadata({ data: "json, name=months", elemType: MonthDetail })
  months?: MonthDetail[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=payee_locations", elemType: PayeeLocation })
  payeeLocations?: PayeeLocation[];

  @SpeakeasyMetadata({ data: "json, name=payees", elemType: Payee })
  payees?: Payee[];

  @SpeakeasyMetadata({ data: "json, name=scheduled_subtransactions", elemType: ScheduledSubTransaction })
  scheduledSubtransactions?: ScheduledSubTransaction[];

  @SpeakeasyMetadata({ data: "json, name=scheduled_transactions", elemType: ScheduledTransactionSummary })
  scheduledTransactions?: ScheduledTransactionSummary[];

  @SpeakeasyMetadata({ data: "json, name=subtransactions", elemType: SubTransaction })
  subtransactions?: SubTransaction[];

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: TransactionSummary })
  transactions?: TransactionSummary[];
}
