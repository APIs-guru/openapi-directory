from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import supportedcountry


@dataclass_json
@dataclass
class SupportedCountriesResponse:
    countries: Optional[List[supportedcountry.SupportedCountry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    
