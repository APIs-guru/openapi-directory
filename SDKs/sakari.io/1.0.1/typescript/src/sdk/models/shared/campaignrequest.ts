import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CampaignRequestFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: string[];

  @Metadata({ data: "json, name=contacts" })
  contacts?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}

export enum CampaignRequestTriggerCodeEnum {
    M = "M"
,    S = "S"
,    Fu = "FU"
}


export class CampaignRequestTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: CampaignRequestTriggerCodeEnum;
}


export class CampaignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters" })
  filters?: CampaignRequestFilters;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=trigger" })
  trigger?: CampaignRequestTrigger;
}
