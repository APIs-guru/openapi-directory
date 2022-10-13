from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Pagination:
    current_page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_page' }})
    per_page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    total_entries: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    total_pages: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_pages' }})
    
