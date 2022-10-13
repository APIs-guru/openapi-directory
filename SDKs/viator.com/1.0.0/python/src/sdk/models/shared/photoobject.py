from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PhotoObject:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    editors_pick: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editorsPick' }})
    owner_avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAvatarURL' }})
    owner_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerCountry' }})
    owner_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerId' }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerName' }})
    photo_hi_res_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoHiResURL' }})
    photo_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoId' }})
    photo_medium_res_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoMediumResURL' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoURL' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    product_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTitle' }})
    product_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productUrlName' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    ssl_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslSupported' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailURL' }})
    time_uploaded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeUploaded' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
