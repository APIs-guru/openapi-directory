from dataclasses import dataclass, field
from enum import Enum

class TweetFieldsParameterEnum(str, Enum):
    ID = "id"
    CREATED_AT = "created_at"
    TEXT = "text"
    AUTHOR_ID = "author_id"
    IN_REPLY_TO_USER_ID = "in_reply_to_user_id"
    REFERENCED_TWEETS = "referenced_tweets"
    ATTACHMENTS = "attachments"
    WITHHELD = "withheld"
    GEO = "geo"
    ENTITIES = "entities"
    PUBLIC_METRICS = "public_metrics"
    POSSIBLY_SENSITIVE = "possibly_sensitive"
    SOURCE = "source"
    LANG = "lang"
    CONTEXT_ANNOTATIONS = "context_annotations"
    NON_PUBLIC_METRICS = "non_public_metrics"
    PROMOTED_METRICS = "promoted_metrics"
    ORGANIC_METRICS = "organic_metrics"

