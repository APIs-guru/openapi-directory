from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import link


@dataclass_json
@dataclass
class PersonaLinks:
    self: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    shows: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shows' }})
    

@dataclass_json
@dataclass
class Persona:
    links: Optional[PersonaLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    bio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bio' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    since: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'since' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
