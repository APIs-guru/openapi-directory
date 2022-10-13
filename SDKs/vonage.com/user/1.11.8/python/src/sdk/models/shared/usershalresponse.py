from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usersembeddedobject
from . import links


@dataclass_json
@dataclass
class UsersHalResponse:
    embedded: Optional[usersembeddedobject.UsersEmbeddedObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    total_items: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_items' }})
    total_pages: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_pages' }})
    
