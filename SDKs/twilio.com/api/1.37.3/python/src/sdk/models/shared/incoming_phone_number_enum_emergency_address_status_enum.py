from dataclasses import dataclass, field
from enum import Enum

class IncomingPhoneNumberEnumEmergencyAddressStatusEnum(str, Enum):
    REGISTERED = "registered"
    UNREGISTERED = "unregistered"
    PENDING_REGISTRATION = "pending-registration"
    REGISTRATION_FAILURE = "registration-failure"
    PENDING_UNREGISTRATION = "pending-unregistration"
    UNREGISTRATION_FAILURE = "unregistration-failure"

