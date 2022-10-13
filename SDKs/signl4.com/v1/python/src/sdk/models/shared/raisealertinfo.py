from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alertattachment
from . import eventparameterinfo


@dataclass_json
@dataclass
class RaiseAlertInfo:
    attachments: Optional[List[alertattachment.AlertAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    flags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    parameters: Optional[List[eventparameterinfo.EventParameterInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
