from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EntryThumbForAPIContract:
    mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime') }})
    url_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlOriginal') }})
    url_small_thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSmallThumb') }})
    url_thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlThumb') }})
    url_tiny_thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlTinyThumb') }})
    
