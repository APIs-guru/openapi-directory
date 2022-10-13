from dataclasses import dataclass, field
from typing import Enum

class CredentialEnumPushServiceEnum(str, Enum):
    GCM = "gcm"
    APN = "apn"
    FCM = "fcm"

