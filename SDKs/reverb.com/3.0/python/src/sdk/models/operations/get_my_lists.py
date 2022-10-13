from dataclasses import dataclass, field
from typing import List


@dataclass
class GetMyListsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyListsRequest:
    security: GetMyListsSecurity = field(default=None)
    

@dataclass
class GetMyListsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
