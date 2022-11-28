from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuleNewTags:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class RuleNew:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    directives: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDescription') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    system: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    tags: Optional[List[RuleNewTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    
