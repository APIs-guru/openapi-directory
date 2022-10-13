from dataclasses import dataclass, field
from typing import Enum

class TrunkEnumTransferSettingEnum(str, Enum):
    DISABLE_ALL = "disable-all"
    ENABLE_ALL = "enable-all"
    SIP_ONLY = "sip-only"

