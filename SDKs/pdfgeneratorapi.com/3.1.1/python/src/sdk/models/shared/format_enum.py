from dataclasses import dataclass, field
from typing import Enum

class FormatEnum(str, Enum):
    PDF = "pdf"
    HTML = "html"
    ZIP = "zip"
    XLSX = "xlsx"

