import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HookEventTypeEnum {
    All = "all"
,    Check = "check"
}

export enum HookStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


// Hook
/** 
 * Represents a hook configuration
**/
export class Hook extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions?: string[];

  @Metadata({ data: "json, name=event_type" })
  eventType?: HookEventTypeEnum;

  @Metadata({ data: "json, name=signing_key" })
  signingKey?: string;

  @Metadata({ data: "json, name=status" })
  status?: HookStatusEnum;

  @Metadata({ data: "json, name=subscriber_type" })
  subscriberType?: string;

  @Metadata({ data: "json, name=subscriber_url" })
  subscriberUrl?: string;
}
