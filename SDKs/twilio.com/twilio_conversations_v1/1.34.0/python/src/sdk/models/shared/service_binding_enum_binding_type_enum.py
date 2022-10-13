from dataclasses import dataclass, field
from typing import Enum

class ServiceBindingEnumBindingTypeEnum(str, Enum):
    APN = "apn"
    GCM = "gcm"
    FCM = "fcm"

