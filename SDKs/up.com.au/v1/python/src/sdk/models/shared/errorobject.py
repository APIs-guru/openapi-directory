from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorObjectSource:
    r"""ErrorObjectSource
    If applicable, location in the request that this error relates to. This
    may be a parameter in the query string, or a an attribute in the
    request body.
    
    """
    
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclass
class ErrorObject:
    r"""ErrorObject
    Provides information about an error processing a request.
    
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    source: Optional[ErrorObjectSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
