from dataclasses import dataclass, field
from typing import Enum

class TollfreeVerificationEnumStatusEnum(str, Enum):
    PENDING_REVIEW = "PENDING_REVIEW"
    IN_REVIEW = "IN_REVIEW"
    TWILIO_APPROVED = "TWILIO_APPROVED"
    TWILIO_REJECTED = "TWILIO_REJECTED"

