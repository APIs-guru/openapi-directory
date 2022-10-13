from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NominalCodeNominalCodeNominalCode:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    

@dataclass_json
@dataclass
class NominalCode:
    nominal_code: Optional[NominalCodeNominalCodeNominalCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NominalCode' }})
    
