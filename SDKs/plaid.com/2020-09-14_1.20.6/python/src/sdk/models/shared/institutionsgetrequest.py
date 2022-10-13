from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import countrycode_enum
from . import institutionsgetrequestoptions


@dataclass_json
@dataclass
class InstitutionsGetRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    country_codes: List[countrycode_enum.CountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_codes' }})
    offset: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    options: Optional[institutionsgetrequestoptions.InstitutionsGetRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
