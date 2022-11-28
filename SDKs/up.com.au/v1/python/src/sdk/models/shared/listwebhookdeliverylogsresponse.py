from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWebhookDeliveryLogsResponseLinks:
    next: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclass
class ListWebhookDeliveryLogsResponse:
    r"""ListWebhookDeliveryLogsResponse
    Successful response to get all delivery logs for a webhook. This returns
    a paginated list of delivery logs, which can be scrolled by following the
    `next` and `prev` links if present.
    
    """
    
    data: List[WebhookDeliveryLogResource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListWebhookDeliveryLogsResponseLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
