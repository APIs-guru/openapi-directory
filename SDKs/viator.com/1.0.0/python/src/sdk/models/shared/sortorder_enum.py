from dataclasses import dataclass, field
from enum import Enum

class SortOrderEnum(str, Enum):
    TOP_SELLERS = "TOP_SELLERS"
    REVIEW_AVG_RATING_A = "REVIEW_AVG_RATING_A"
    REVIEW_AVG_RATING_D = "REVIEW_AVG_RATING_D"
    PRICE_FROM_A = "PRICE_FROM_A"
    PRICE_FROM_D = "PRICE_FROM_D"

