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
	GoalCreationMonth       *time.Time            `json:"goal_creation_month,omitempty"`
	GoalMonthsToBudget      *int32                `json:"goal_months_to_budget,omitempty"`
	GoalOverallFunded       *int64                `json:"goal_overall_funded,omitempty"`
	GoalOverallLeft         *int64                `json:"goal_overall_left,omitempty"`
	GoalPercentageComplete  *int32                `json:"goal_percentage_complete,omitempty"`
	GoalTarget              *int64                `json:"goal_target,omitempty"`
	GoalTargetMonth         *time.Time            `json:"goal_target_month,omitempty"`
	GoalType                *CategoryGoalTypeEnum `json:"goal_type,omitempty"`
	GoalUnderFunded         *int64                `json:"goal_under_funded,omitempty"`
	Hidden                  bool                  `json:"hidden"`
	ID                      string                `json:"id"`
	Name                    string                `json:"name"`
	Note                    *string               `json:"note,omitempty"`
	OriginalCategoryGroupID *string               `json:"original_category_group_id,omitempty"`
}
