package shared

type PlanDataTypeOfPlanBasedOnTheSourceEnum string

const (
	PlanDataTypeOfPlanBasedOnTheSourceEnumStarter         PlanDataTypeOfPlanBasedOnTheSourceEnum = "STARTER"
	PlanDataTypeOfPlanBasedOnTheSourceEnumSfdc1MEdition   PlanDataTypeOfPlanBasedOnTheSourceEnum = "SFDC_1M_EDITION"
	PlanDataTypeOfPlanBasedOnTheSourceEnumBronze          PlanDataTypeOfPlanBasedOnTheSourceEnum = "BRONZE"
	PlanDataTypeOfPlanBasedOnTheSourceEnumSilver          PlanDataTypeOfPlanBasedOnTheSourceEnum = "SILVER"
	PlanDataTypeOfPlanBasedOnTheSourceEnumGold            PlanDataTypeOfPlanBasedOnTheSourceEnum = "GOLD"
	PlanDataTypeOfPlanBasedOnTheSourceEnumDatasetDownload PlanDataTypeOfPlanBasedOnTheSourceEnum = "DATASET_DOWNLOAD"
)

type PlanDataServiceThatProvisionedThePlanEnum string

const (
	PlanDataServiceThatProvisionedThePlanEnumSalesforce           PlanDataServiceThatProvisionedThePlanEnum = "SALESFORCE"
	PlanDataServiceThatProvisionedThePlanEnumHeroku               PlanDataServiceThatProvisionedThePlanEnum = "HEROKU"
	PlanDataServiceThatProvisionedThePlanEnumSfAutoProvision      PlanDataServiceThatProvisionedThePlanEnum = "SF_AUTO_PROVISION"
	PlanDataServiceThatProvisionedThePlanEnumSfAutoProvisionBound PlanDataServiceThatProvisionedThePlanEnum = "SF_AUTO_PROVISION_BOUND"
)

type PlanData struct {
	Amount *int32                                     `json:"amount,omitempty"`
	Plan   *PlanDataTypeOfPlanBasedOnTheSourceEnum    `json:"plan,omitempty"`
	Source *PlanDataServiceThatProvisionedThePlanEnum `json:"source,omitempty"`
}
