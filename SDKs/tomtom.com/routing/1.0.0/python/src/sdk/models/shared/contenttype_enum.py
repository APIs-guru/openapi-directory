from dataclasses import dataclass, field
from typing import Enum

class ContentTypeEnum(str, Enum):
    XML = "xml"
    JSON = "json"
    JSONP = "jsonp"

