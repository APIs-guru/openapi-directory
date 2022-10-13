from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReviewObject:
    owner_avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAvatarURL' }})
    owner_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerCountry' }})
    owner_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerId' }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerName' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    product_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTitle' }})
    product_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productUrlName' }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedDate' }})
    rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    review: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review' }})
    review_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewId' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    ssl_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslSupported' }})
    submission_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submissionDate' }})
    viator_feedback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viatorFeedback' }})
    viator_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viatorNotes' }})
    
