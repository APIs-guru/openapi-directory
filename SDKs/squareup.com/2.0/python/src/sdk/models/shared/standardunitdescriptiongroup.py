from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import standardunitdescription


@dataclass_json
@dataclass
class StandardUnitDescriptionGroup:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language_code' }})
    standard_unit_descriptions: Optional[List[standardunitdescription.StandardUnitDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standard_unit_descriptions' }})
    
