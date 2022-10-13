from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class ContactRequestMobile:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    

@dataclass_json
@dataclass
class ContactRequest:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    mobile: Optional[ContactRequestMobile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
