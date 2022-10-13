from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EntryThumbForAPIContract:
    mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mime' }})
    url_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlOriginal' }})
    url_small_thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlSmallThumb' }})
    url_thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlThumb' }})
    url_tiny_thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlTinyThumb' }})
    
