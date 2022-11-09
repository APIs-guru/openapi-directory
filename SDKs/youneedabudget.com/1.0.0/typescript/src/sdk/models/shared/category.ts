import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CategoryGoalTypeEnum {
    Tb = "TB"
,    Tbd = "TBD"
,    Mf = "MF"
,    Need = "NEED"
}


export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity: number;

  @Metadata({ data: "json, name=balance" })
  balance: number;

  @Metadata({ data: "json, name=budgeted" })
  budgeted: number;

  @Metadata({ data: "json, name=category_group_id" })
  categoryGroupId: string;

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=goal_creation_month" })
  goalCreationMonth?: Date;

  @Metadata({ data: "json, name=goal_months_to_budget" })
  goalMonthsToBudget?: number;

  @Metadata({ data: "json, name=goal_overall_funded" })
  goalOverallFunded?: number;

  @Metadata({ data: "json, name=goal_overall_left" })
  goalOverallLeft?: number;

  @Metadata({ data: "json, name=goal_percentage_complete" })
  goalPercentageComplete?: number;

  @Metadata({ data: "json, name=goal_target" })
  goalTarget?: number;

  @Metadata({ data: "json, name=goal_target_month" })
  goalTargetMonth?: Date;

  @Metadata({ data: "json, name=goal_type" })
  goalType?: CategoryGoalTypeEnum;

  @Metadata({ data: "json, name=goal_under_funded" })
  goalUnderFunded?: number;

  @Metadata({ data: "json, name=hidden" })
  hidden: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=original_category_group_id" })
  originalCategoryGroupId?: string;
}
