from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TemplateTypeEnum(str, Enum):
    SMS = "SMS"
    WEB = "Web"


@dataclass_json
@dataclass
class Template:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    type: Optional[TemplateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
