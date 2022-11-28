from dataclasses import dataclass, field
from enum import Enum

class NewFactorEnumNotificationPlatformsEnum(str, Enum):
    APN = "apn"
    FCM = "fcm"
    NONE = "none"

