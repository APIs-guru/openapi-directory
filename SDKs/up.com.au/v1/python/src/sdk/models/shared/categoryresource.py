from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CategoryResourceAttributes:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class CategoryResourceLinks:
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsChildrenData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsChildrenLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsChildren:
    data: List[CategoryResourceRelationshipsChildrenData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[CategoryResourceRelationshipsChildrenLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsParentData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsParentLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsParent:
    data: CategoryResourceRelationshipsParentData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[CategoryResourceRelationshipsParentLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationships:
    children: CategoryResourceRelationshipsChildren = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    parent: CategoryResourceRelationshipsParent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    

@dataclass_json
@dataclass
class CategoryResource:
    attributes: CategoryResourceAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[CategoryResourceLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: CategoryResourceRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
