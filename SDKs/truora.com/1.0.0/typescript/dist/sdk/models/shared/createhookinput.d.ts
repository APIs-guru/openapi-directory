import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateHookInputEventTypeEnum {
    All = "all",
    Check = "check",
    ContinuousCheck = "continuous_check"
}
export declare enum CreateHookInputStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum CreateHookInputSubscriberLanguageEnum {
    Af = "af",
    Ar = "ar",
    Ca = "ca",
    Cs = "cs",
    Da = "da",
    De = "de",
    El = "el",
    En = "en",
    Es = "es",
    Fi = "fi",
    Fr = "fr",
    He = "he",
    Hi = "hi",
    Hr = "hr",
    Hu = "hu",
    Id = "id",
    It = "it",
    Ja = "ja",
    Ko = "ko",
    Ms = "ms",
    Nb = "nb",
    Nl = "nl",
    Pl = "pl",
    Pt = "pt",
    PrBr = "pr-BR",
    Ro = "ro",
    Ru = "ru",
    Sv = "sv",
    Th = "th",
    Tl = "tl",
    Tr = "tr",
    Vi = "vi",
    Zh = "zh",
    ZhCn = "zh-CN",
    ZhHk = "zh-HK"
}
export declare enum CreateHookInputSubscriberTypeEnum {
    Web = "web",
    Email = "email"
}
/**
 * Creates a hook related to previous created check.
**/
export declare class CreateHookInput extends SpeakeasyBase {
    actions?: string[];
    eventType: CreateHookInputEventTypeEnum;
    status?: CreateHookInputStatusEnum;
    subscriberAddress?: string;
    subscriberLanguage?: CreateHookInputSubscriberLanguageEnum;
    subscriberName?: string;
    subscriberType: CreateHookInputSubscriberTypeEnum;
    subscriberUrl?: string;
}
