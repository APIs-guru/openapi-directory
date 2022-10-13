from dataclasses import dataclass, field
from typing import Enum

class FlowEnumStatusEnum(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"

