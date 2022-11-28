from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TensorflowTensorShapeProto:
    r"""TensorflowTensorShapeProto
    Dimensions of a tensor.
    """
    
    dim: Optional[List[TensorShapeProtoDim]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dim') }})
    unknown_rank: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknown_rank') }})
    
