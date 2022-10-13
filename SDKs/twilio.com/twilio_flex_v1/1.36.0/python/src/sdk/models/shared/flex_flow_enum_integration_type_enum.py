from dataclasses import dataclass, field
from typing import Enum

class FlexFlowEnumIntegrationTypeEnum(str, Enum):
    STUDIO = "studio"
    EXTERNAL = "external"
    TASK = "task"

