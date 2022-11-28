from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkLink:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class Link:
    link: Optional[LinkLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    
