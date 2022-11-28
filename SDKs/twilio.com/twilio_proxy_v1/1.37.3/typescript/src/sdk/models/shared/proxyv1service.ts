import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceEnumGeoMatchLevelEnum } from "./serviceenumgeomatchlevelenum";
import { ServiceEnumNumberSelectionBehaviorEnum } from "./serviceenumnumberselectionbehaviorenum";



export class ProxyV1Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=chat_instance_sid" })
  chatInstanceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=default_ttl" })
  defaultTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=geo_match_level" })
  geoMatchLevel?: ServiceEnumGeoMatchLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=intercept_callback_url" })
  interceptCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=number_selection_behavior" })
  numberSelectionBehavior?: ServiceEnumNumberSelectionBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=out_of_session_callback_url" })
  outOfSessionCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
