import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CampaignRequestFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=contacts" })
  contacts?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}

export enum CampaignRequestTriggerCodeEnum {
    M = "M",
    S = "S",
    Fu = "FU"
}


export class CampaignRequestTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: CampaignRequestTriggerCodeEnum;
}


export class CampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: CampaignRequestFilters;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: CampaignRequestTrigger;
}
