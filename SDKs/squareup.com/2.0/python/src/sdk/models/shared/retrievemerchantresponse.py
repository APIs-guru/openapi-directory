from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import merchant


@dataclass_json
@dataclass
class RetrieveMerchantResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    merchant: Optional[merchant.Merchant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    
