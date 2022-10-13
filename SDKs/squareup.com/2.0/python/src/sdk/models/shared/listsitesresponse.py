from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import site


@dataclass_json
@dataclass
class ListSitesResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    sites: Optional[List[site.Site]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    
