from dataclasses import dataclass, field
from typing import Enum

class IncomingPhoneNumberEnumVoiceReceiveModeEnum(str, Enum):
    VOICE = "voice"
    FAX = "fax"

