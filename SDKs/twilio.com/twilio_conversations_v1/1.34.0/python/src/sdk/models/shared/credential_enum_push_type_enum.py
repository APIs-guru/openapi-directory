from dataclasses import dataclass, field
from typing import Enum

class CredentialEnumPushTypeEnum(str, Enum):
    APN = "apn"
    GCM = "gcm"
    FCM = "fcm"

