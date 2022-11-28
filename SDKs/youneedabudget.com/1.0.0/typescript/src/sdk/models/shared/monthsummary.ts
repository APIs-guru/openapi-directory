import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MonthSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity: number;

  @SpeakeasyMetadata({ data: "json, name=age_of_money" })
  ageOfMoney?: number;

  @SpeakeasyMetadata({ data: "json, name=budgeted" })
  budgeted: number;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=income" })
  income: number;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=to_be_budgeted" })
  toBeBudgeted: number;
}
