from dataclasses import dataclass, field
from enum import Enum

class MfaTypeEnum(str, Enum):
    SMS = "SMS"
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"

