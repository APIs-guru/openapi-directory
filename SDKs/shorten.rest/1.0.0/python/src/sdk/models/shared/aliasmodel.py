from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AliasModel:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    destinations: Optional[List[DestinationModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    metatags: Optional[List[MetaTagModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metatags') }})
    snippets: Optional[List[SnippetModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippets') }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    
