from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mfatype_enum


@dataclass_json
@dataclass
class MfaDetails:
    mfa_type: Optional[mfatype_enum.MfaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfa_type' }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
