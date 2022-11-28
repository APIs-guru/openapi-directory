from dataclasses import dataclass, field
from enum import Enum

class FlowRevisionEnumStatusEnum(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"

