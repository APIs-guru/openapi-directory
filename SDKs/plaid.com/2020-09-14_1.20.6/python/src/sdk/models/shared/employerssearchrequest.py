from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EmployersSearchRequest:
    r"""EmployersSearchRequest
    EmployersSearchRequest defines the request schema for `/employers/search`.
    """
    
    products: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    query: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
