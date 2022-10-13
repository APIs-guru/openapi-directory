from dataclasses import dataclass, field
from typing import Enum

class SummaryEnumCallTypeEnum(str, Enum):
    CARRIER = "carrier"
    SIP = "sip"
    TRUNKING = "trunking"
    CLIENT = "client"

