from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AltLabel:
    lang_ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('langIdent') }})
    mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
