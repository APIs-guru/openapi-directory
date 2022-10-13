from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import meta12
from . import meta11


@dataclass_json
@dataclass
class CSSTemplateRestAPIGetList:
    changed_by: Optional[meta12.Meta12] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_by' }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on_delta_humanized' }})
    created_by: Optional[meta11.Meta11] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'css' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_name' }})
    
