from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateCurrentUserRequestBody:
    about_me: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'about_me' }})
    digest: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'digest' }})
    digest_photos: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'digest_photos' }})
    firstname: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'firstname' }})
    last_listings_view: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'last_listings_view' }})
    lastname: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'lastname' }})
    old_password: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'old_password' }})
    password: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    post_reminders: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'post_reminders' }})
    profile_image_source: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'profile_image_source' }})
    public_name: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'public_name' }})
    public_post_sources: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'public_post_sources' }})
    show_all_group_posts: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'show_all_group_posts' }})
    special_notices: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'special_notices' }})
    

@dataclass
class UpdateCurrentUserRequest:
    request: Optional[UpdateCurrentUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UpdateCurrentUserResponse:
    content_type: str = field()
    status_code: int = field()
    current_user: Optional[shared.CurrentUser] = field(default=None)
    
