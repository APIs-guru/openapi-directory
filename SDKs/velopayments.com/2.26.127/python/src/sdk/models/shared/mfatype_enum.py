from dataclasses import dataclass, field
from typing import Enum

class MfaTypeEnum(str, Enum):
    SMS = "SMS"
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"

