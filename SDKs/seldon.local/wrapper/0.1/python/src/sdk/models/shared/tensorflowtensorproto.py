from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TensorflowTensorProto:
    r"""TensorflowTensorProto
    Protocol buffer representing a tensor.
    """
    
    bool_val: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bool_val') }})
    dcomplex_val: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dcomplex_val') }})
    double_val: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('double_val') }})
    dtype: Optional[TensorflowDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtype') }})
    float_val: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('float_val') }})
    half_val: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('half_val') }})
    int64_val: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('int64_val') }})
    int_val: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('int_val') }})
    resource_handle_val: Optional[List[TensorflowResourceHandleProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_handle_val') }})
    scomplex_val: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scomplex_val') }})
    string_val: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('string_val') }})
    tensor_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tensor_content') }})
    tensor_shape: Optional[TensorflowTensorShapeProto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tensor_shape') }})
    uint32_val: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uint32_val') }})
    uint64_val: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uint64_val') }})
    variant_val: Optional[List[TensorflowVariantTensorDataProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variant_val') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version_number') }})
    
