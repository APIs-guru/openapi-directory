from dataclasses import dataclass, field
from enum import Enum

class IncomingPhoneNumberEnumVoiceReceiveModeEnum(str, Enum):
    VOICE = "voice"
    FAX = "fax"

