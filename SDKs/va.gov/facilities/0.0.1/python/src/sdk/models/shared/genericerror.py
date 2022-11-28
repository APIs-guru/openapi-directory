from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenericError:
    r"""GenericError
    A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values).
    """
    
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
