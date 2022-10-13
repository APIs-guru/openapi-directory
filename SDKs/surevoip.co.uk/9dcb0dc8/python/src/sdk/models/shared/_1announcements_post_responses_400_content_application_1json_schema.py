from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors:
    field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    message: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class OneannouncementsPostResponses400ContentApplication1jsonSchema:
    errors: List[OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
