from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetPayeeListResponseCompany:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operating_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingName' }})
    
