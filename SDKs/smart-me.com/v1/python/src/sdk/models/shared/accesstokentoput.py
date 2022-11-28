from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessTokenToPut:
    r"""AccessTokenToPut
    Container Class for the Put action of an Access Token
    """
    
    card_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardId') }, 'form': { 'field_name': 'CardId' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }, 'form': { 'field_name': 'UserId' }})
    
