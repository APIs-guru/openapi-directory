from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagBaseContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }, 'form': { 'field_name': 'additionalNames' }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryName' }, 'form': { 'field_name': 'categoryName' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }, 'form': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }, 'form': { 'field_name': 'name' }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlSlug' }, 'form': { 'field_name': 'urlSlug' }})
    
