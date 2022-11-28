from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NominalCodeNominalCode:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    

@dataclass_json
@dataclass
class NominalCode:
    nominal_code: Optional[NominalCodeNominalCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NominalCode') }})
    
