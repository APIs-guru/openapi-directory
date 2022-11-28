from dataclasses import dataclass, field
from enum import Enum

class BindingEnumBindingTypeEnum(str, Enum):
    GCM = "gcm"
    APN = "apn"
    FCM = "fcm"

