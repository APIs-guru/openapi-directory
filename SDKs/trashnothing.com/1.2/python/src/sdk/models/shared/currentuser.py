from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CurrentUserEmail:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    bouncing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bouncing' }})
    spam_stop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spam_stop' }})
    

@dataclass_json
@dataclass
class CurrentUserFeedback:
    percent_positive: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percent_positive' }})
    restriction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restriction' }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    

@dataclass_json
@dataclass
class CurrentUserLocation:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    radius: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radius' }})
    

@dataclass_json
@dataclass
class CurrentUserPostLocation:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class CurrentUser:
    about_me: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'about_me' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    digest_photos: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest_photos' }})
    email: Optional[CurrentUserEmail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    feedback: Optional[CurrentUserFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    has_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_password' }})
    last_listings_view: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_listings_view', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastname' }})
    location: Optional[CurrentUserLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    member_since: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member_since' }})
    post_location: Optional[CurrentUserPostLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_location' }})
    post_reminders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_reminders' }})
    profile_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile_image' }})
    profile_image_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile_image_source' }})
    public_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_name' }})
    public_post_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_post_sources' }})
    reply_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply_time' }})
    show_all_group_posts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_all_group_posts' }})
    signup: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signup', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    special_notices: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'special_notices' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    uses_fair_offer_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uses_fair_offer_policy' }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
