from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import products_enum


@dataclass_json
@dataclass
class InstitutionsGetRequestOptions:
    include_optional_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_optional_metadata' }})
    include_payment_initiation_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_payment_initiation_metadata' }})
    oauth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth' }})
    products: Optional[List[products_enum.ProductsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    routing_numbers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing_numbers' }})
    
