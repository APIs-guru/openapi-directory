import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";
export declare class BudgetSummary extends SpeakeasyBase {
    accounts?: Account[];
    currencyFormat?: CurrencyFormat;
    dateFormat?: DateFormat;
    firstMonth?: Date;
    id: string;
    lastModifiedOn?: Date;
    lastMonth?: Date;
    name: string;
}
