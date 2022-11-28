from dataclasses import dataclass, field
from enum import Enum

class ConfigurationAddressEnumAutoCreationTypeEnum(str, Enum):
    WEBHOOK = "webhook"
    STUDIO = "studio"
    DEFAULT = "default"

