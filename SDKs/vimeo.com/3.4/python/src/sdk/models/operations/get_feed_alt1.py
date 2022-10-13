from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetFeedAlt1TypeEnum(str, Enum):
    APPEARS = "appears"
    CATEGORY_FEATURED = "category_featured"
    CHANNEL = "channel"
    FACEBOOK_FEED = "facebook_feed"
    FOLLOWING = "following"
    GROUP = "group"
    LIKES = "likes"
    ONDEMAND_PUBLISH = "ondemand_publish"
    SHARE = "share"
    TAGGED_WITH = "tagged_with"
    TWITTER_TIMELINE = "twitter_timeline"
    UPLOADS = "uploads"


@dataclass
class GetFeedAlt1QueryParams:
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    type: Optional[GetFeedAlt1TypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeedAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFeedAlt1Request:
    query_params: GetFeedAlt1QueryParams = field(default=None)
    security: GetFeedAlt1Security = field(default=None)
    

@dataclass
class GetFeedAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    activity_3_1s: Optional[List[shared.Activity31]] = field(default=None)
    
