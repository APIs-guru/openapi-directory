from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CSSTemplateRestAPIPut:
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'css' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_name' }})
    
