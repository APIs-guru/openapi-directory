import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlanDataTypeOfPlanBasedOnTheSourceEnum {
    Starter = "STARTER",
    Sfdc1MEdition = "SFDC_1M_EDITION",
    Bronze = "BRONZE",
    Silver = "SILVER",
    Gold = "GOLD",
    DatasetDownload = "DATASET_DOWNLOAD"
}

export enum PlanDataServiceThatProvisionedThePlanEnum {
    Salesforce = "SALESFORCE",
    Heroku = "HEROKU",
    SfAutoProvision = "SF_AUTO_PROVISION",
    SfAutoProvisionBound = "SF_AUTO_PROVISION_BOUND"
}


export class PlanData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: PlanDataTypeOfPlanBasedOnTheSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: PlanDataServiceThatProvisionedThePlanEnum;
}
