from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWebhookRequest:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    payor_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    webhook_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookUrl') }})
    authorization_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationHeader') }})
    categories: Optional[List[CategoryEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
