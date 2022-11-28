from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum

class CreateHookInputEventTypeEnum(str, Enum):
    ALL = "all"
    CHECK = "check"
    CONTINUOUS_CHECK = "continuous_check"

class CreateHookInputStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class CreateHookInputSubscriberLanguageEnum(str, Enum):
    AF = "af"
    AR = "ar"
    CA = "ca"
    CS = "cs"
    DA = "da"
    DE = "de"
    EL = "el"
    EN = "en"
    ES = "es"
    FI = "fi"
    FR = "fr"
    HE = "he"
    HI = "hi"
    HR = "hr"
    HU = "hu"
    ID = "id"
    IT = "it"
    JA = "ja"
    KO = "ko"
    MS = "ms"
    NB = "nb"
    NL = "nl"
    PL = "pl"
    PT = "pt"
    PR_BR = "pr-BR"
    RO = "ro"
    RU = "ru"
    SV = "sv"
    TH = "th"
    TL = "tl"
    TR = "tr"
    VI = "vi"
    ZH = "zh"
    ZH_CN = "zh-CN"
    ZH_HK = "zh-HK"

class CreateHookInputSubscriberTypeEnum(str, Enum):
    WEB = "web"
    EMAIL = "email"


@dataclass
class CreateHookInput:
    r"""CreateHookInput
    Creates a hook related to previous created check.
    """
    
    event_type: CreateHookInputEventTypeEnum = field(metadata={'form': { 'field_name': 'event_type' }})
    subscriber_type: CreateHookInputSubscriberTypeEnum = field(metadata={'form': { 'field_name': 'subscriber_type' }})
    actions: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'actions' }})
    status: Optional[CreateHookInputStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'status' }})
    subscriber_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subscriber_address' }})
    subscriber_language: Optional[CreateHookInputSubscriberLanguageEnum] = field(default=None, metadata={'form': { 'field_name': 'subscriber_language' }})
    subscriber_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subscriber_name' }})
    subscriber_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subscriber_url' }})
    
