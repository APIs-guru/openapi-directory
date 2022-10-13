from dataclasses import dataclass, field
from typing import Enum

class UserBindingEnumBindingTypeEnum(str, Enum):
    GCM = "gcm"
    APN = "apn"
    FCM = "fcm"

