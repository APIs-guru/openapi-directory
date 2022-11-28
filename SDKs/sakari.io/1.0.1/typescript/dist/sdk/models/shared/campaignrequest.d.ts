import { SpeakeasyBase } from "../../../internal/utils";
export declare class CampaignRequestFilters extends SpeakeasyBase {
    attributes?: string[];
    contacts?: string[];
    tags?: string[];
}
export declare enum CampaignRequestTriggerCodeEnum {
    M = "M",
    S = "S",
    Fu = "FU"
}
export declare class CampaignRequestTrigger extends SpeakeasyBase {
    code?: CampaignRequestTriggerCodeEnum;
}
export declare class CampaignRequest extends SpeakeasyBase {
    filters?: CampaignRequestFilters;
    template?: string;
    trigger?: CampaignRequestTrigger;
}
