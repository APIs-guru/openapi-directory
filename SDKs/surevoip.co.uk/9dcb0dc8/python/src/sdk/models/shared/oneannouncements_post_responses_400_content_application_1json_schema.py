from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors:
    field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    message: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class OneannouncementsPostResponses400ContentApplication1jsonSchema:
    errors: List[OneannouncementsPostResponses400ContentApplication1jsonSchemaErrors] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
