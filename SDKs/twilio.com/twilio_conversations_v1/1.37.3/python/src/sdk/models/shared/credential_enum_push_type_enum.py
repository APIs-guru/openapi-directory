from dataclasses import dataclass, field
from enum import Enum

class CredentialEnumPushTypeEnum(str, Enum):
    APN = "apn"
    GCM = "gcm"
    FCM = "fcm"

