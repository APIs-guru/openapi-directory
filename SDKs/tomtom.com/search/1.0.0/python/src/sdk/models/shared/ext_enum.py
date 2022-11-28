from dataclasses import dataclass, field
from enum import Enum

class ExtEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    JS = "js"
    XML = "xml"

