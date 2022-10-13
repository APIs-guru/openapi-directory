from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class SearchHeaders:
    galaxy_ap_name: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name' }})
    galaxy_ap_password: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password' }})
    galaxy_search_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type' }})
    

@dataclass_json
@dataclass
class SearchRequestBodyAddress:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine2' }})
    

@dataclass_json
@dataclass
class SearchRequestBody:
    address: Optional[SearchRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    age: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Age' }})
    dob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dob' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MiddleName' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneNumber' }})
    

@dataclass
class SearchRequest:
    headers: SearchHeaders = field(default=None)
    request: Optional[SearchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
