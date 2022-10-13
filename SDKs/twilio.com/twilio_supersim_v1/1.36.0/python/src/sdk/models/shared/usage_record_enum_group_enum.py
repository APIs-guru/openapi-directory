from dataclasses import dataclass, field
from typing import Enum

class UsageRecordEnumGroupEnum(str, Enum):
    SIM = "sim"
    FLEET = "fleet"
    NETWORK = "network"
    ISO_COUNTRY = "isoCountry"

