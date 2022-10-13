from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fileobject


@dataclass_json
@dataclass
class Files:
    items: Optional[List[fileobject.FileObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Page' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerPage' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
