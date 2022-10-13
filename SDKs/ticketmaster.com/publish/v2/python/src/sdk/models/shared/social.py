from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import twitter


@dataclass_json
@dataclass
class Social:
    twitter: Optional[twitter.Twitter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twitter' }})
    
