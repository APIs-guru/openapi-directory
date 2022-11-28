from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWebhooksResponseLinks:
    next: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclass
class ListWebhooksResponse:
    r"""ListWebhooksResponse
    Successful response to get all webhooks. This returns a paginated list of
    webhooks, which can be scrolled by following the `prev` and `next` links
    if present.
    
    """
    
    data: List[WebhookResource] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListWebhooksResponseLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
