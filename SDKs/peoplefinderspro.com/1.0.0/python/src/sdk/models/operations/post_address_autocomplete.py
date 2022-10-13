from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostAddressAutocompleteHeaders:
    galaxy_ap_name: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name' }})
    galaxy_ap_password: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password' }})
    galaxy_search_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type' }})
    

@dataclass_json
@dataclass
class PostAddressAutocompleteRequestBody:
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    

@dataclass
class PostAddressAutocompleteRequest:
    headers: PostAddressAutocompleteHeaders = field(default=None)
    request: Optional[PostAddressAutocompleteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAddressAutocompleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
