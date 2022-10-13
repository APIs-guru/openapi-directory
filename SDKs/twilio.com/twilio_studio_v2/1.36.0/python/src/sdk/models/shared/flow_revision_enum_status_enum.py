from dataclasses import dataclass, field
from typing import Enum

class FlowRevisionEnumStatusEnum(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"

