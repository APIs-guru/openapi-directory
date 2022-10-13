from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostListingsListingIDConversationsPathParams:
    listing_id: str = field(default=None, metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostListingsListingIDConversationsRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    

@dataclass
class PostListingsListingIDConversationsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostListingsListingIDConversationsRequest:
    path_params: PostListingsListingIDConversationsPathParams = field(default=None)
    request: Optional[PostListingsListingIDConversationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostListingsListingIDConversationsSecurity = field(default=None)
    

@dataclass
class PostListingsListingIDConversationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
