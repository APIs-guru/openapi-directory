from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import celllocation
from . import entityobject


@dataclass_json
@dataclass
class Attributes:
    cell_location: Optional[celllocation.CellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellLocation' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    page_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    value: Optional[entityobject.EntityObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
