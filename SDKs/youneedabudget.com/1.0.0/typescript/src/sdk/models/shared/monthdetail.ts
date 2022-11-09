import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";


export class MonthDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity: number;

  @Metadata({ data: "json, name=age_of_money" })
  ageOfMoney?: number;

  @Metadata({ data: "json, name=budgeted" })
  budgeted: number;

  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories: Category[];

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
