from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDistributionLinks:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate' }})
    link_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkType' }})
    mailing_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailingListId' }})
    survey_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surveyId' }})
    
