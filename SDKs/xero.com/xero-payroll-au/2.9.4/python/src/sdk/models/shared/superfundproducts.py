from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import superfundproduct


@dataclass_json
@dataclass
class SuperFundProducts:
    super_fund_products: Optional[List[superfundproduct.SuperFundProduct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuperFundProducts' }})
    
