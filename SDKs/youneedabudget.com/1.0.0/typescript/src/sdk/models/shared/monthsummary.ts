import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MonthSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity: number;

  @Metadata({ data: "json, name=age_of_money" })
  ageOfMoney?: number;

  @Metadata({ data: "json, name=budgeted" })
  budgeted: number;

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=income" })
  income: number;

  @Metadata({ data: "json, name=month" })
  month: Date;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=to_be_budgeted" })
  toBeBudgeted: number;
}
