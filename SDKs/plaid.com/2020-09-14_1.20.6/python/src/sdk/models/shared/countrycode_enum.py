from dataclasses import dataclass, field
from typing import Enum

class CountryCodeEnum(str, Enum):
    US = "US"
    GB = "GB"
    ES = "ES"
    NL = "NL"
    FR = "FR"
    IE = "IE"
    CA = "CA"

