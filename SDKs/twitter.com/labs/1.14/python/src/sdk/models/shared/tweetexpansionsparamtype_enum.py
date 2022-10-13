from dataclasses import dataclass, field
from typing import Enum

class TweetExpansionsParamTypeEnum(str, Enum):
    AUTHOR_ID = "author_id"
    REFERENCED_TWEETS_ID = "referenced_tweets.id"
    IN_REPLY_TO_USER_ID = "in_reply_to_user_id"
    GEO_PLACE_ID = "geo.place_id"
    ATTACHMENTS_MEDIA_KEYS = "attachments.media_keys"
    ATTACHMENTS_POLL_IDS = "attachments.poll_ids"
    ENTITIES_MENTIONS_USERNAME = "entities.mentions.username"
    REFERENCED_TWEETS_ID_AUTHOR_ID = "referenced_tweets.id.author_id"

