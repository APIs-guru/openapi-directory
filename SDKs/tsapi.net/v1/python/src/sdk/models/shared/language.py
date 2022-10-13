from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import language


@dataclass_json
@dataclass
class Language:
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ident' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sub_languages: Optional[List[language.Language]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subLanguages' }})
    
