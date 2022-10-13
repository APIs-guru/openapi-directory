from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AltLabel:
    lang_ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'langIdent' }})
    mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
