from dataclasses import dataclass, field
from enum import Enum

class SortOrderReviewEnum(str, Enum):
    REVIEW_RATING_A = "REVIEW_RATING_A"
    REVIEW_RATING_D = "REVIEW_RATING_D"
    REVIEW_RATING_SUBMISSION_DATE_D = "REVIEW_RATING_SUBMISSION_DATE_D"

