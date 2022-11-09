import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceEnumGeoMatchLevelEnum } from "./serviceenumgeomatchlevelenum";
import { ServiceEnumNumberSelectionBehaviorEnum } from "./serviceenumnumberselectionbehaviorenum";


export class ProxyV1Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=chat_instance_sid" })
  chatInstanceSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=default_ttl" })
  defaultTtl?: number;

  @Metadata({ data: "json, name=geo_match_level" })
  geoMatchLevel?: ServiceEnumGeoMatchLevelEnum;

  @Metadata({ data: "json, name=intercept_callback_url" })
  interceptCallbackUrl?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=number_selection_behavior" })
  numberSelectionBehavior?: ServiceEnumNumberSelectionBehaviorEnum;

  @Metadata({ data: "json, name=out_of_session_callback_url" })
  outOfSessionCallbackUrl?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
