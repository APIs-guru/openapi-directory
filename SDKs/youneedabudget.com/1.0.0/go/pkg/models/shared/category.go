package shared

import (
	"time"
)

type CategoryGoalTypeEnum string

const (
	CategoryGoalTypeEnumTb   CategoryGoalTypeEnum = "TB"
	CategoryGoalTypeEnumTbd  CategoryGoalTypeEnum = "TBD"
	CategoryGoalTypeEnumMf   CategoryGoalTypeEnum = "MF"
	CategoryGoalTypeEnumNeed CategoryGoalTypeEnum = "NEED"
)

type Category struct {
	Activity                int64                 `json:"activity"`
	Balance                 int64                 `json:"balance"`
	Budgeted                int64                 `json:"budgeted"`
	CategoryGroupID         string                `json:"category_group_id"`
	Deleted                 bool                  `json:"deleted"`
	GoalCreationMonth       *time.Time            `json:"goal_creation_month"`
	GoalMonthsToBudget      *int32                `json:"goal_months_to_budget"`
	GoalOverallFunded       *int64                `json:"goal_overall_funded"`
	GoalOverallLeft         *int64                `json:"goal_overall_left"`
	GoalPercentageComplete  *int32                `json:"goal_percentage_complete"`
	GoalTarget              *int64                `json:"goal_target"`
	GoalTargetMonth         *time.Time            `json:"goal_target_month"`
	GoalType                *CategoryGoalTypeEnum `json:"goal_type"`
	GoalUnderFunded         *int64                `json:"goal_under_funded"`
	Hidden                  bool                  `json:"hidden"`
	ID                      string                `json:"id"`
	Name                    string                `json:"name"`
	Note                    *string               `json:"note"`
	OriginalCategoryGroupID *string               `json:"original_category_group_id"`
}
