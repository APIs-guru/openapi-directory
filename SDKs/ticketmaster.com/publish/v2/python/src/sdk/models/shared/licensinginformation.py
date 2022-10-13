from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import regionrestrictions


@dataclass_json
@dataclass
class LicensingInformation:
    license: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    region_restriction: Optional[regionrestrictions.RegionRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionRestriction' }})
    
