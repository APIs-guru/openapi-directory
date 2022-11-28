from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TensorflowVariantTensorDataProto:
    r"""TensorflowVariantTensorDataProto
    Protocol buffer representing the serialization format of DT_VARIANT tensors.
    """
    
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    tensors: Optional[List[TensorflowTensorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tensors') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_name') }})
    
