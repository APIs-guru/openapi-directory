from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import itemimportrequestoptions
from . import products_enum
from . import itemimportrequestuserauth


@dataclass_json
@dataclass
class ItemImportRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    options: Optional[itemimportrequestoptions.ItemImportRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    products: List[products_enum.ProductsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    user_auth: itemimportrequestuserauth.ItemImportRequestUserAuth = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_auth' }})
    
