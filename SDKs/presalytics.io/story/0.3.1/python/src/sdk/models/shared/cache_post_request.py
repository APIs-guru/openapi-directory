from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CachePostRequest:
    current_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_id') }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    subdocument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdocument') }})
    
