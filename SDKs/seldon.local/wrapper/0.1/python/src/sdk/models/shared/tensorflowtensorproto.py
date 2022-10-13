from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tensorflowdatatype_enum
from . import tensorflowresourcehandleproto
from . import tensorflowtensorshapeproto
from . import tensorflowvarianttensordataproto


@dataclass_json
@dataclass
class TensorflowTensorProto:
    bool_val: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bool_val' }})
    dcomplex_val: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dcomplex_val' }})
    double_val: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'double_val' }})
    dtype: Optional[tensorflowdatatype_enum.TensorflowDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dtype' }})
    float_val: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'float_val' }})
    half_val: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'half_val' }})
    int64_val: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'int64_val' }})
    int_val: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'int_val' }})
    resource_handle_val: Optional[List[tensorflowresourcehandleproto.TensorflowResourceHandleProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_handle_val' }})
    scomplex_val: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scomplex_val' }})
    string_val: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'string_val' }})
    tensor_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tensor_content' }})
    tensor_shape: Optional[tensorflowtensorshapeproto.TensorflowTensorShapeProto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tensor_shape' }})
    uint32_val: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uint32_val' }})
    uint64_val: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uint64_val' }})
    variant_val: Optional[List[tensorflowvarianttensordataproto.TensorflowVariantTensorDataProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variant_val' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version_number' }})
    
