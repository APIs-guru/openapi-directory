from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import albumforapicontract
from . import userforapicontract

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
    album: Optional[albumforapicontract.AlbumForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'album' }})
    media_type: Optional[AlbumForUserForAPIContractMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    purchase_status: Optional[AlbumForUserForAPIContractPurchaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseStatus' }})
    rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    user: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
