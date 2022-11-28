from dataclasses import dataclass, field
from enum import Enum

class BrandRegistrationsEnumStatusEnum(str, Enum):
    PENDING = "PENDING"
    APPROVED = "APPROVED"
    FAILED = "FAILED"
    IN_REVIEW = "IN_REVIEW"
    DELETED = "DELETED"

