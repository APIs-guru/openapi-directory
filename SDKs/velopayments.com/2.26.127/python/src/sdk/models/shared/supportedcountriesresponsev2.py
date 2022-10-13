from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import supportedcountryv2


@dataclass_json
@dataclass
class SupportedCountriesResponseV2:
    countries: Optional[List[supportedcountryv2.SupportedCountryV2]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    
