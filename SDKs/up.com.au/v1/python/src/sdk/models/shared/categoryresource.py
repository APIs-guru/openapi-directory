from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CategoryResourceAttributes:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class CategoryResourceLinks:
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsChildrenData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsChildrenLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsChildren:
    data: List[CategoryResourceRelationshipsChildrenData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[CategoryResourceRelationshipsChildrenLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsParentData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsParentLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationshipsParent:
    data: CategoryResourceRelationshipsParentData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[CategoryResourceRelationshipsParentLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class CategoryResourceRelationships:
    children: CategoryResourceRelationshipsChildren = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    parent: CategoryResourceRelationshipsParent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    

@dataclass_json
@dataclass
class CategoryResource:
    r"""CategoryResource
    Provides information about a category and its ancestry.
    
    """
    
    attributes: CategoryResourceAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: CategoryResourceRelationships = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[CategoryResourceLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
