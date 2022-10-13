from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tensorshapeprotodim


@dataclass_json
@dataclass
class TensorflowTensorShapeProto:
    dim: Optional[List[tensorshapeprotodim.TensorShapeProtoDim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dim' }})
    unknown_rank: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknown_rank' }})
    
