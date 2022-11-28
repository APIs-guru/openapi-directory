from dataclasses import dataclass, field
from enum import Enum

class CredentialEnumPushServiceEnum(str, Enum):
    GCM = "gcm"
    APN = "apn"
    FCM = "fcm"

