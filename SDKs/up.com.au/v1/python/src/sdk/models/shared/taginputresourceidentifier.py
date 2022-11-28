from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagInputResourceIdentifier:
    r"""TagInputResourceIdentifier
    Uniquely identifies a single tag in the API.
    
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
