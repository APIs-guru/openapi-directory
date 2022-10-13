from dataclasses import dataclass, field
from typing import Enum

class UserExpansionsParameterEnum(str, Enum):
    PINNED_TWEET_ID = "pinned_tweet_id"

