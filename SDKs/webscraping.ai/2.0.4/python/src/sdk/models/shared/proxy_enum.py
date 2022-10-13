from dataclasses import dataclass, field
from typing import Enum

class ProxyEnum(str, Enum):
    DATACENTER = "datacenter"
    RESIDENTIAL = "residential"

