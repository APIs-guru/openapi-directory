from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostListingsListingIDConversationsPathParams:
    listing_id: str = field(metadata={'path_param': { 'field_name': 'listing_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostListingsListingIDConversationsRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class PostListingsListingIDConversationsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostListingsListingIDConversationsRequest:
    path_params: PostListingsListingIDConversationsPathParams = field()
    security: PostListingsListingIDConversationsSecurity = field()
    request: Optional[PostListingsListingIDConversationsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostListingsListingIDConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    
