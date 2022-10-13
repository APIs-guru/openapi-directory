from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogquickamount


@dataclass_json
@dataclass
class CatalogQuickAmountsSettings:
    amounts: Optional[List[catalogquickamount.CatalogQuickAmount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amounts' }})
    eligible_for_auto_amounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligible_for_auto_amounts' }})
    option: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    
