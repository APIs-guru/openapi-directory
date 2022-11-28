from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Developer:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    games_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('games_count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_background') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    
