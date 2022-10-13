from dataclasses import dataclass, field
from typing import Enum

class CallSummariesEnumCallTypeEnum(str, Enum):
    CARRIER = "carrier"
    SIP = "sip"
    TRUNKING = "trunking"
    CLIENT = "client"

