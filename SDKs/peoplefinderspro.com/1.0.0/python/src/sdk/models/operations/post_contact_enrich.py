from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostContactEnrichHeaders:
    galaxy_ap_name: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name', 'style': 'simple', 'explode': False }})
    galaxy_ap_password: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password', 'style': 'simple', 'explode': False }})
    galaxy_search_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostContactEnrichRequestBodyAddress:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine2' }})
    

@dataclass_json
@dataclass
class PostContactEnrichRequestBody:
    address: Optional[PostContactEnrichRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    age: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Age' }})
    dob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dob' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    

@dataclass
class PostContactEnrichRequest:
    headers: PostContactEnrichHeaders = field(default=None)
    request: Optional[PostContactEnrichRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostContactEnrichResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
