from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import tweetmetrics
from . import genericproblem
from . import invalidrequestproblem
from . import clientforbiddenproblem
from . import resourcenotfoundproblem
from . import resourceunauthorizedproblem
from . import disallowedresourceproblem
from . import unsupportedauthenticationproblem
from . import usagecapexceededproblem
from . import connectionexceptionproblem
from . import clientdisconnectedproblem
from . import operationaldisconnectproblem
from . import rulescapproblem
from . import invalidruleproblem
from . import duplicateruleproblem


@dataclass_json
@dataclass
class TweetMetricsResponse:
    data: Optional[List[tweetmetrics.TweetMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    errors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
