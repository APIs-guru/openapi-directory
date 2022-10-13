from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class VerifyV2Form:
    form_meta: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_meta' }})
    form_type: Optional[shared.FormEnumFormTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_type' }})
    forms: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forms' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
