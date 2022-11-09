import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: Account[];

  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories?: Category[];

  @Metadata({ data: "json, name=category_groups", elemType: shared.CategoryGroup })
  categoryGroups?: CategoryGroup[];

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

  @Metadata({ data: "json, name=months", elemType: shared.MonthDetail })
  months?: MonthDetail[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=payee_locations", elemType: shared.PayeeLocation })
  payeeLocations?: PayeeLocation[];

  @Metadata({ data: "json, name=payees", elemType: shared.Payee })
  payees?: Payee[];

  @Metadata({ data: "json, name=scheduled_subtransactions", elemType: shared.ScheduledSubTransaction })
  scheduledSubtransactions?: ScheduledSubTransaction[];

  @Metadata({ data: "json, name=scheduled_transactions", elemType: shared.ScheduledTransactionSummary })
  scheduledTransactions?: ScheduledTransactionSummary[];

  @Metadata({ data: "json, name=subtransactions", elemType: shared.SubTransaction })
  subtransactions?: SubTransaction[];

  @Metadata({ data: "json, name=transactions", elemType: shared.TransactionSummary })
  transactions?: TransactionSummary[];
}
