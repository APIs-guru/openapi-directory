from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebhookEventCallback:
    r"""WebhookEventCallback
    Asynchronous callback request used for webhook event delivery.
    
    """
    
    data: WebhookEventResource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
