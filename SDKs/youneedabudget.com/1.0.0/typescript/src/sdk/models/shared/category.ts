import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CategoryGoalTypeEnum {
    Tb = "TB",
    Tbd = "TBD",
    Mf = "MF",
    Need = "NEED"
}


export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: number;

  @SpeakeasyMetadata({ data: "json, name=budgeted" })
  budgeted: number;

  @SpeakeasyMetadata({ data: "json, name=category_group_id" })
  categoryGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=goal_creation_month" })
  goalCreationMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=goal_months_to_budget" })
  goalMonthsToBudget?: number;

  @SpeakeasyMetadata({ data: "json, name=goal_overall_funded" })
  goalOverallFunded?: number;

  @SpeakeasyMetadata({ data: "json, name=goal_overall_left" })
  goalOverallLeft?: number;

  @SpeakeasyMetadata({ data: "json, name=goal_percentage_complete" })
  goalPercentageComplete?: number;

  @SpeakeasyMetadata({ data: "json, name=goal_target" })
  goalTarget?: number;

  @SpeakeasyMetadata({ data: "json, name=goal_target_month" })
  goalTargetMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=goal_type" })
  goalType?: CategoryGoalTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=goal_under_funded" })
  goalUnderFunded?: number;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=original_category_group_id" })
  originalCategoryGroupId?: string;
}
