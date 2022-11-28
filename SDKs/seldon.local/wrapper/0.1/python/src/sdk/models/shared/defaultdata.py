from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DefaultData:
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    ndarry: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ndarry') }})
    tensor: Optional[Tensor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tensor') }})
    tftensor: Optional[TensorflowTensorProto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tftensor') }})
    
