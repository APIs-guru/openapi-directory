from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CampaignRequestFilters:
    attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    contacts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
class CampaignRequestTriggerCodeEnum(str, Enum):
    M = "M"
    S = "S"
    FU = "FU"


@dataclass_json
@dataclass
class CampaignRequestTrigger:
    code: Optional[CampaignRequestTriggerCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    

@dataclass_json
@dataclass
class CampaignRequest:
    filters: Optional[CampaignRequestFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    trigger: Optional[CampaignRequestTrigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    
