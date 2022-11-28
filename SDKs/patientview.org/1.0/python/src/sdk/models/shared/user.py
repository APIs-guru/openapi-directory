from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from . import *


@dataclass
class User:
    api_key: Optional[APIKey] = field(default=None)
    can_switch_user: Optional[bool] = field(default=None)
    change_password: Optional[bool] = field(default=None)
    contact_number: Optional[str] = field(default=None)
    created: Optional[datetime] = field(default=None)
    current_login: Optional[datetime] = field(default=None)
    current_login_ip_address: Optional[str] = field(default=None)
    date_of_birth: Optional[datetime] = field(default=None)
    deleted: Optional[bool] = field(default=None)
    dummy: Optional[bool] = field(default=None)
    email: Optional[str] = field(default=None)
    email_verified: Optional[bool] = field(default=None)
    forename: Optional[str] = field(default=None)
    group_roles: Optional[List[GroupRole]] = field(default=None)
    hide_secret_word_notification: Optional[bool] = field(default=None)
    id: Optional[int] = field(default=None)
    identifiers: Optional[List[dict[str, Any]]] = field(default=None)
    last_login: Optional[datetime] = field(default=None)
    last_login_ip_address: Optional[str] = field(default=None)
    latest_data_received_by: Optional[BaseGroup] = field(default=None)
    latest_data_received_date: Optional[datetime] = field(default=None)
    locked: Optional[bool] = field(default=None)
    picture: Optional[str] = field(default=None)
    role_description: Optional[str] = field(default=None)
    secret_word_is_set: Optional[bool] = field(default=None)
    surname: Optional[str] = field(default=None)
    user_features: Optional[List[UserFeature]] = field(default=None)
    username: Optional[str] = field(default=None)
    
