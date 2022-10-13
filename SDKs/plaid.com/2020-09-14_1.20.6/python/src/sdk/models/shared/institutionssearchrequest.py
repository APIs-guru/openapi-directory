from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import countrycode_enum
from . import institutionssearchrequestoptions
from . import products_enum


@dataclass_json
@dataclass
class InstitutionsSearchRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    country_codes: List[countrycode_enum.CountryCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_codes' }})
    options: Optional[institutionssearchrequestoptions.InstitutionsSearchRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    products: List[products_enum.ProductsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    query: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
