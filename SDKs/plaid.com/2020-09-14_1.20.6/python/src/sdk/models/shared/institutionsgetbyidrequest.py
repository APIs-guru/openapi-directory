from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import countrycode_enum
from . import institutionsgetbyidrequestoptions


@dataclass_json
@dataclass
class InstitutionsGetByIDRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    country_codes: List[countrycode_enum.CountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_codes' }})
    institution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'institution_id' }})
    options: Optional[institutionsgetbyidrequestoptions.InstitutionsGetByIDRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
