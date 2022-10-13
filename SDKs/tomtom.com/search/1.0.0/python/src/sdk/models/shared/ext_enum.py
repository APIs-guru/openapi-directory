from dataclasses import dataclass, field
from typing import Enum

class ExtEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    JS = "js"
    XML = "xml"

