from dataclasses import dataclass, field
from enum import Enum

class ContentTypeEnum(str, Enum):
    XML = "xml"
    JSON = "json"
    JSONP = "jsonp"

