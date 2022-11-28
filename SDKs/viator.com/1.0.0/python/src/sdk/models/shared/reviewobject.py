from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReviewObject:
    r"""ReviewObject
    **object** containing a single user review
    """
    
    owner_avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAvatarURL') }})
    owner_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerCountry') }})
    owner_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerId') }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerName') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    product_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTitle') }})
    product_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productUrlName') }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedDate') }})
    rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    review: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review') }})
    review_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewId') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    ssl_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslSupported') }})
    submission_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissionDate') }})
    viator_feedback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viatorFeedback') }})
    viator_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viatorNotes') }})
    
