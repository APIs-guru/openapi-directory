from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetFeedPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class GetFeedTypeEnum(str, Enum):
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
class GetFeedQueryParams:
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    type: Optional[GetFeedTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeedSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFeedRequest:
    path_params: GetFeedPathParams = field()
    query_params: GetFeedQueryParams = field()
    security: GetFeedSecurity = field()
    

@dataclass
class GetFeedResponse:
    content_type: str = field()
    status_code: int = field()
    activity_3_1s: Optional[List[shared.Activity31]] = field(default=None)
    
