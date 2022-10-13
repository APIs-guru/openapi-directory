from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tensorflowtensorproto


@dataclass_json
@dataclass
class TensorflowVariantTensorDataProto:
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    tensors: Optional[List[tensorflowtensorproto.TensorflowTensorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tensors' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_name' }})
    
