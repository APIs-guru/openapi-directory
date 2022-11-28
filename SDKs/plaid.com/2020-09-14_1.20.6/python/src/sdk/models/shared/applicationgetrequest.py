from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationGetRequest:
    r"""ApplicationGetRequest
    ApplicationGetResponse defines the schema for `/application/get`
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
