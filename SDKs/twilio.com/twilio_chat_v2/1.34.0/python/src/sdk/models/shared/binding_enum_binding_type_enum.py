from dataclasses import dataclass, field
from typing import Enum

class BindingEnumBindingTypeEnum(str, Enum):
    GCM = "gcm"
    APN = "apn"
    FCM = "fcm"

