from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TensorflowResourceHandleProto:
    r"""TensorflowResourceHandleProto
    Protocol buffer representing a handle to a tensorflow resource. Handles are
    not valid across executions, but can be serialized back and forth from within
    a single run.
    """
    
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    hash_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash_code') }})
    maybe_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maybe_type_name') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
