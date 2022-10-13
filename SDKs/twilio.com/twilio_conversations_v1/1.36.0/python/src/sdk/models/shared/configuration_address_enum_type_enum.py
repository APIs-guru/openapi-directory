from dataclasses import dataclass, field
from typing import Enum

class ConfigurationAddressEnumTypeEnum(str, Enum):
    SMS = "sms"
    WHATSAPP = "whatsapp"
    MESSENGER = "messenger"
    GBM = "gbm"

