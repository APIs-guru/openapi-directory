from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostPhoneEnrichHeaders:
    galaxy_ap_name: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name' }})
    galaxy_ap_password: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password' }})
    galaxy_search_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type' }})
    

@dataclass_json
@dataclass
class PostPhoneEnrichRequestBody:
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phone' }})
    

@dataclass
class PostPhoneEnrichRequest:
    headers: PostPhoneEnrichHeaders = field(default=None)
    request: Optional[PostPhoneEnrichRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPhoneEnrichResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
