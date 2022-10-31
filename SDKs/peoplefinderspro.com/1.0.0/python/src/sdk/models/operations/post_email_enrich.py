from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostEmailEnrichHeaders:
    galaxy_ap_name: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name', 'style': 'simple', 'explode': False }})
    galaxy_ap_password: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password', 'style': 'simple', 'explode': False }})
    galaxy_search_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostEmailEnrichRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    

@dataclass
class PostEmailEnrichRequest:
    headers: PostEmailEnrichHeaders = field(default=None)
    request: Optional[PostEmailEnrichRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostEmailEnrichResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
