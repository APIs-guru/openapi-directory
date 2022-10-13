from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscribeToEventBody:
    encrypt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypt' }})
    publication_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicationUrl' }})
    topics: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    
