from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import template


@dataclass_json
@dataclass
class TemplateResponse:
    data: Optional[template.Template] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
