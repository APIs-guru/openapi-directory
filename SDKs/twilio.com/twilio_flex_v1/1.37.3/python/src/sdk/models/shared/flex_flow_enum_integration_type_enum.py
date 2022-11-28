from dataclasses import dataclass, field
from enum import Enum

class FlexFlowEnumIntegrationTypeEnum(str, Enum):
    STUDIO = "studio"
    EXTERNAL = "external"
    TASK = "task"

