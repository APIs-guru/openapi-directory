from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscribeToEventBody:
    publication_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicationUrl') }})
    topics: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    encrypt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypt') }})
    
