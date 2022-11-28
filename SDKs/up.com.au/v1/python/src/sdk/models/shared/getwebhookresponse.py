from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetWebhookResponse:
    r"""GetWebhookResponse
    Successful response to get a single webhook.
    
    """
    
    data: WebhookResource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
