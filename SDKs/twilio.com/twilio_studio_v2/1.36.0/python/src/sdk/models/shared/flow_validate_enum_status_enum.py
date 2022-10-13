from dataclasses import dataclass, field
from typing import Enum

class FlowValidateEnumStatusEnum(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"

