from dataclasses import dataclass, field
from enum import Enum

class FlowEnumStatusEnum(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"

