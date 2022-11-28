from dataclasses import dataclass, field
from enum import Enum

class TrunkEnumTransferSettingEnum(str, Enum):
    DISABLE_ALL = "disable-all"
    ENABLE_ALL = "enable-all"
    SIP_ONLY = "sip-only"

