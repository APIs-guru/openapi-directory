import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlanDataTypeOfPlanBasedOnTheSourceEnum {
    Starter = "STARTER"
,    Sfdc1MEdition = "SFDC_1M_EDITION"
,    Bronze = "BRONZE"
,    Silver = "SILVER"
,    Gold = "GOLD"
,    DatasetDownload = "DATASET_DOWNLOAD"
}

export enum PlanDataServiceThatProvisionedThePlanEnum {
    Salesforce = "SALESFORCE"
,    Heroku = "HEROKU"
,    SfAutoProvision = "SF_AUTO_PROVISION"
,    SfAutoProvisionBound = "SF_AUTO_PROVISION_BOUND"
}


export class PlanData extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=plan" })
  plan?: PlanDataTypeOfPlanBasedOnTheSourceEnum;

  @Metadata({ data: "json, name=source" })
  source?: PlanDataServiceThatProvisionedThePlanEnum;
}
