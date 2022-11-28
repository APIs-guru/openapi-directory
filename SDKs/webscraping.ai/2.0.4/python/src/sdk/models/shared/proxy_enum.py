from dataclasses import dataclass, field
from enum import Enum

class ProxyEnum(str, Enum):
    DATACENTER = "datacenter"
    RESIDENTIAL = "residential"

