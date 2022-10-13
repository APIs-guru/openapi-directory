from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import cataloginforesponselimits
from . import standardunitdescriptiongroup


@dataclass_json
@dataclass
class CatalogInfoResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    limits: Optional[cataloginforesponselimits.CatalogInfoResponseLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limits' }})
    standard_unit_description_group: Optional[standardunitdescriptiongroup.StandardUnitDescriptionGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standard_unit_description_group' }})
    
