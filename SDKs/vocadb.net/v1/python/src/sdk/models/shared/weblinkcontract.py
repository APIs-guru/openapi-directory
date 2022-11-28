from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WebLinkContractCategoryEnum(str, Enum):
    OFFICIAL = "Official"
    COMMERCIAL = "Commercial"
    REFERENCE = "Reference"
    OTHER = "Other"


@dataclass_json
@dataclass
class WebLinkContract:
    category: Optional[WebLinkContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    description_or_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptionOrUrl') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
