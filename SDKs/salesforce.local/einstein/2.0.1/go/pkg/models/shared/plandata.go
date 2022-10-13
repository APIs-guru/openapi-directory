package shared

type PlanDataPlanTypeOfPlanBasedOnTheSourceEnum string

const (
	PlanDataPlanTypeOfPlanBasedOnTheSourceEnumStarter         PlanDataPlanTypeOfPlanBasedOnTheSourceEnum = "STARTER"
	PlanDataPlanTypeOfPlanBasedOnTheSourceEnumSfdc1MEdition   PlanDataPlanTypeOfPlanBasedOnTheSourceEnum = "SFDC_1M_EDITION"
	PlanDataPlanTypeOfPlanBasedOnTheSourceEnumBronze          PlanDataPlanTypeOfPlanBasedOnTheSourceEnum = "BRONZE"
	PlanDataPlanTypeOfPlanBasedOnTheSourceEnumSilver          PlanDataPlanTypeOfPlanBasedOnTheSourceEnum = "SILVER"
	PlanDataPlanTypeOfPlanBasedOnTheSourceEnumGold            PlanDataPlanTypeOfPlanBasedOnTheSourceEnum = "GOLD"
	PlanDataPlanTypeOfPlanBasedOnTheSourceEnumDatasetDownload PlanDataPlanTypeOfPlanBasedOnTheSourceEnum = "DATASET_DOWNLOAD"
)

type PlanDataSourceServiceThatProvisionedThePlanEnum string

const (
	PlanDataSourceServiceThatProvisionedThePlanEnumSalesforce           PlanDataSourceServiceThatProvisionedThePlanEnum = "SALESFORCE"
	PlanDataSourceServiceThatProvisionedThePlanEnumHeroku               PlanDataSourceServiceThatProvisionedThePlanEnum = "HEROKU"
	PlanDataSourceServiceThatProvisionedThePlanEnumSfAutoProvision      PlanDataSourceServiceThatProvisionedThePlanEnum = "SF_AUTO_PROVISION"
	PlanDataSourceServiceThatProvisionedThePlanEnumSfAutoProvisionBound PlanDataSourceServiceThatProvisionedThePlanEnum = "SF_AUTO_PROVISION_BOUND"
)

type PlanData struct {
	Amount *int32                                           `json:"amount"`
	Plan   *PlanDataPlanTypeOfPlanBasedOnTheSourceEnum      `json:"plan"`
	Source *PlanDataSourceServiceThatProvisionedThePlanEnum `json:"source"`
}
