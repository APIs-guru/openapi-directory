from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostAddressAutocompleteHeaders:
    galaxy_ap_name: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name', 'style': 'simple', 'explode': False }})
    galaxy_ap_password: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password', 'style': 'simple', 'explode': False }})
    galaxy_search_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostAddressAutocompleteRequestBody:
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    

@dataclass
class PostAddressAutocompleteRequest:
    headers: PostAddressAutocompleteHeaders = field()
    request: Optional[PostAddressAutocompleteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAddressAutocompleteResponse:
    content_type: str = field()
    status_code: int = field()
    
