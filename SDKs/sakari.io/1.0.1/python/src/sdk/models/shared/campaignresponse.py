from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaign


@dataclass_json
@dataclass
class CampaignResponse:
    data: Optional[campaign.Campaign] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
