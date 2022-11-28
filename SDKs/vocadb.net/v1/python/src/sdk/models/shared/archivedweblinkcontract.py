from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ArchivedWebLinkContractCategoryEnum(str, Enum):
    OFFICIAL = "Official"
    COMMERCIAL = "Commercial"
    REFERENCE = "Reference"
    OTHER = "Other"


@dataclass_json
@dataclass
class ArchivedWebLinkContract:
    category: Optional[ArchivedWebLinkContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
