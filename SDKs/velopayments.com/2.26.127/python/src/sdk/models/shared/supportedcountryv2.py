from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regionv2


@dataclass_json
@dataclass
class SupportedCountryV2:
    currencies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencies' }})
    iso_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isoCountryCode' }})
    regions: Optional[List[regionv2.RegionV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    
