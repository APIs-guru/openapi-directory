from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import tensor
from . import tensorflowtensorproto


@dataclass_json
@dataclass
class DefaultData:
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    ndarry: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ndarry' }})
    tensor: Optional[tensor.Tensor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tensor' }})
    tftensor: Optional[tensorflowtensorproto.TensorflowTensorProto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tftensor' }})
    
