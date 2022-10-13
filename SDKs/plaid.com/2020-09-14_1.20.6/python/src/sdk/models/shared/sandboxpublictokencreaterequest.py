from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import products_enum
from . import sandboxpublictokencreaterequestoptions


@dataclass_json
@dataclass
class SandboxPublicTokenCreateRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    initial_products: List[products_enum.ProductsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initial_products' }})
    institution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'institution_id' }})
    options: Optional[sandboxpublictokencreaterequestoptions.SandboxPublicTokenCreateRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
