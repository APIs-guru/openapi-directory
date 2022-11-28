from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceOfferingNodesCollection:
    data: Optional[List[ServiceOfferingNode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[CollectionLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[CollectionMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
