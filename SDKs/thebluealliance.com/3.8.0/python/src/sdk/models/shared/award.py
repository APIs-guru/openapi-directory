from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import award_recipient


@dataclass_json
@dataclass
class Award:
    award_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'award_type' }})
    event_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recipient_list: List[award_recipient.AwardRecipient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_list' }})
    year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
