import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HookEventTypeEnum {
    All = "all",
    Check = "check"
}

export enum HookStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


// Hook
/** 
 * Represents a hook configuration
**/
export class Hook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions?: string[];

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType?: HookEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=signing_key" })
  signingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HookStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriber_type" })
  subscriberType?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriber_url" })
  subscriberUrl?: string;
}
