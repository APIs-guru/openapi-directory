from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_version


@dataclass_json
@dataclass
class APIVersions:
    all: Optional[List[api_version.APIVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    latest: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest' }})
    
