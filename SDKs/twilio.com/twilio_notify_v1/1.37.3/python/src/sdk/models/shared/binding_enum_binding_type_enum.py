from dataclasses import dataclass, field
from enum import Enum

class BindingEnumBindingTypeEnum(str, Enum):
    APN = "apn"
    GCM = "gcm"
    SMS = "sms"
    FCM = "fcm"
    FACEBOOK_MESSENGER = "facebook-messenger"
    ALEXA = "alexa"

