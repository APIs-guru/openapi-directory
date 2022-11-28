import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlanDataTypeOfPlanBasedOnTheSourceEnum {
    Starter = "STARTER",
    Sfdc1MEdition = "SFDC_1M_EDITION",
    Bronze = "BRONZE",
    Silver = "SILVER",
    Gold = "GOLD",
    DatasetDownload = "DATASET_DOWNLOAD"
}
export declare enum PlanDataServiceThatProvisionedThePlanEnum {
    Salesforce = "SALESFORCE",
    Heroku = "HEROKU",
    SfAutoProvision = "SF_AUTO_PROVISION",
    SfAutoProvisionBound = "SF_AUTO_PROVISION_BOUND"
}
export declare class PlanData extends SpeakeasyBase {
    amount?: number;
    plan?: PlanDataTypeOfPlanBasedOnTheSourceEnum;
    source?: PlanDataServiceThatProvisionedThePlanEnum;
}
