from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import scriptdescriptiondata


@dataclass_json
@dataclass
class ScriptLocalizationDetail:
    config_metadata: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configMetadata' }})
    data: Optional[scriptdescriptiondata.ScriptDescriptionData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    
