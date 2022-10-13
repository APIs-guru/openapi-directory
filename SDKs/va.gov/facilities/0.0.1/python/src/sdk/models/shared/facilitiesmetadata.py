from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import distance
from . import pagination


@dataclass_json
@dataclass
class FacilitiesMetadata:
    distances: List[distance.Distance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distances' }})
    pagination: pagination.Pagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
