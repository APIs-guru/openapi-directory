from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIEndpoints:
    r"""APIEndpoints
    objects with two fields, the first one has the endpoint name as key and its description as value, the second one has HTTP verb to use (GET, POST PUT, DELETE) as key and the supported version an API path for value.
    """
    
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointName') }})
    http_verb: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpVerb') }})
    
