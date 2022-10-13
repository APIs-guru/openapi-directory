from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPostsSpokespersonsQueryParams:
    party_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'partyId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIPostsSpokespersonsRequest:
    query_params: GetAPIPostsSpokespersonsQueryParams = field(default=None)
    

@dataclass
class GetAPIPostsSpokespersonsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    government_opposition_post_items: Optional[List[shared.GovernmentOppositionPostItem]] = field(default=None)
    status_code: int = field(default=None)
    
