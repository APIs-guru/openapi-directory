from dataclasses import dataclass, field
from typing import Enum

class ReplaceItemsEnumStatusEnum(str, Enum):
    DRAFT = "draft"
    PENDING_REVIEW = "pending-review"
    IN_REVIEW = "in-review"
    TWILIO_REJECTED = "twilio-rejected"
    TWILIO_APPROVED = "twilio-approved"
    PROVISIONALLY_APPROVED = "provisionally-approved"

