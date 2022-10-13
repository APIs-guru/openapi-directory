from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ArchivedWebLinkContractCategoryEnum(str, Enum):
    OFFICIAL = "Official"
    COMMERCIAL = "Commercial"
    REFERENCE = "Reference"
    OTHER = "Other"


@dataclass_json
@dataclass
class ArchivedWebLinkContract:
    category: Optional[ArchivedWebLinkContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
