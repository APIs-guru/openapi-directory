from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AlbumForUserForAPIContractMediaTypeEnum(str, Enum):
    PHYSICAL_DISC = "PhysicalDisc"
    DIGITAL_DOWNLOAD = "DigitalDownload"
    OTHER = "Other"

class AlbumForUserForAPIContractPurchaseStatusEnum(str, Enum):
    NOTHING = "Nothing"
    WISHLISTED = "Wishlisted"
    ORDERED = "Ordered"
    OWNED = "Owned"


@dataclass_json
@dataclass
class AlbumForUserForAPIContract:
    album: Optional[AlbumForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album') }})
    media_type: Optional[AlbumForUserForAPIContractMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    purchase_status: Optional[AlbumForUserForAPIContractPurchaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseStatus') }})
    rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    user: Optional[UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
