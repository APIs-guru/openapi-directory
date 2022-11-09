import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateHookInputEventTypeEnum {
    All = "all"
,    Check = "check"
,    ContinuousCheck = "continuous_check"
}

export enum CreateHookInputStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum CreateHookInputSubscriberLanguageEnum {
    Af = "af"
,    Ar = "ar"
,    Ca = "ca"
,    Cs = "cs"
,    Da = "da"
,    De = "de"
,    El = "el"
,    En = "en"
,    Es = "es"
,    Fi = "fi"
,    Fr = "fr"
,    He = "he"
,    Hi = "hi"
,    Hr = "hr"
,    Hu = "hu"
,    Id = "id"
,    It = "it"
,    Ja = "ja"
,    Ko = "ko"
,    Ms = "ms"
,    Nb = "nb"
,    Nl = "nl"
,    Pl = "pl"
,    Pt = "pt"
,    PrBr = "pr-BR"
,    Ro = "ro"
,    Ru = "ru"
,    Sv = "sv"
,    Th = "th"
,    Tl = "tl"
,    Tr = "tr"
,    Vi = "vi"
,    Zh = "zh"
,    ZhCn = "zh-CN"
,    ZhHk = "zh-HK"
}

export enum CreateHookInputSubscriberTypeEnum {
    Web = "web"
,    Email = "email"
}


// CreateHookInput
/** 
 * Creates a hook related to previous created check.
**/
export class CreateHookInput extends SpeakeasyBase {
  @Metadata({ data: "form, name=actions;" })
  actions?: string[];

  @Metadata({ data: "form, name=event_type;" })
  eventType: CreateHookInputEventTypeEnum;

  @Metadata({ data: "form, name=status;" })
  status?: CreateHookInputStatusEnum;

  @Metadata({ data: "form, name=subscriber_address;" })
  subscriberAddress?: string;

  @Metadata({ data: "form, name=subscriber_language;" })
  subscriberLanguage?: CreateHookInputSubscriberLanguageEnum;

  @Metadata({ data: "form, name=subscriber_name;" })
  subscriberName?: string;

  @Metadata({ data: "form, name=subscriber_type;" })
  subscriberType: CreateHookInputSubscriberTypeEnum;

  @Metadata({ data: "form, name=subscriber_url;" })
  subscriberUrl?: string;
}
