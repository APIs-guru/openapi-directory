from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import facility
from . import pagelinks
from . import facilitiesmetadata


@dataclass_json
@dataclass
class FacilitiesResponse:
    data: Optional[List[facility.Facility]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: pagelinks.PageLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: facilitiesmetadata.FacilitiesMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    
