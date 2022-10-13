from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import tagresource


@dataclass_json
@dataclass
class ListTagsResponseLinks:
    next: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    prev: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListTagsResponse:
    data: List[tagresource.TagResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: ListTagsResponseLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    
