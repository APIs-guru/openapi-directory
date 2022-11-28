from dataclasses import dataclass, field
from enum import Enum

class SupportingDocumentEnumStatusEnum(str, Enum):
    DRAFT = "draft"
    PENDING_REVIEW = "pending-review"
    REJECTED = "rejected"
    APPROVED = "approved"
    EXPIRED = "expired"
    PROVISIONALLY_APPROVED = "provisionally-approved"

