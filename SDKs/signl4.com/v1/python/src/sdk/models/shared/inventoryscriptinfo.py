from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import scriptdescriptiondata
from . import scriptlocalizationdetail


@dataclass_json
@dataclass
class InventoryScriptInfo:
    config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    data: Optional[scriptdescriptiondata.ScriptDescriptionData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    event_pattern: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventPattern' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptId' }})
    script_localization_details: Optional[List[scriptlocalizationdetail.ScriptLocalizationDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptLocalizationDetails' }})
    script_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptName' }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
