from dataclasses import dataclass, field
from typing import Enum

class BrandRegistrationsEnumBrandFeedbackEnum(str, Enum):
    TAX_ID = "TAX_ID"
    STOCK_SYMBOL = "STOCK_SYMBOL"
    NONPROFIT = "NONPROFIT"
    GOVERNMENT_ENTITY = "GOVERNMENT_ENTITY"
    OTHERS = "OTHERS"

