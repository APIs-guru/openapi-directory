from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import meta13


@dataclass_json
@dataclass
class CSSTemplateRestAPIGet:
    created_by: Optional[meta13.Meta13] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'css' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_name' }})
    
