from dataclasses import dataclass, field
from typing import Enum

class UserFieldsParameterEnum(str, Enum):
    ID = "id"
    CREATED_AT = "created_at"
    NAME = "name"
    USERNAME = "username"
    PROTECTED = "protected"
    VERIFIED = "verified"
    WITHHELD = "withheld"
    PROFILE_IMAGE_URL = "profile_image_url"
    LOCATION = "location"
    URL = "url"
    DESCRIPTION = "description"
    ENTITIES = "entities"
    PINNED_TWEET_ID = "pinned_tweet_id"
    PUBLIC_METRICS = "public_metrics"

