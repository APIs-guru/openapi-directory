from dataclasses import dataclass, field
from typing import Enum

class NewFactorEnumNotificationPlatformsEnum(str, Enum):
    APN = "apn"
    FCM = "fcm"
    NONE = "none"

