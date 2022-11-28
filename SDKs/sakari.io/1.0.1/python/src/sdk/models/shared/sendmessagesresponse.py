from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendMessagesResponseData:
    estimated_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedPrice') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    messages: Optional[List[Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    queued: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queued') }})
    

@dataclass_json
@dataclass
class SendMessagesResponse:
    data: Optional[SendMessagesResponseData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
