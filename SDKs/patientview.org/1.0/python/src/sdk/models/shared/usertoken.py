from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from . import *


@dataclass
class UserToken:
    audit_actions: Optional[List[str]] = field(default=None)
    check_secret_word: Optional[bool] = field(default=None)
    created: Optional[datetime] = field(default=None)
    expiration: Optional[datetime] = field(default=None)
    external_standards: Optional[List[ExternalStandard]] = field(default=None)
    group_features: Optional[List[Feature]] = field(default=None)
    group_messaging_enabled: Optional[bool] = field(default=None)
    must_set_secret_word: Optional[bool] = field(default=None)
    patient_features: Optional[List[Feature]] = field(default=None)
    patient_messaging_feature_types: Optional[List[str]] = field(default=None)
    patient_roles: Optional[List[Role]] = field(default=None)
    routes: Optional[List[Route]] = field(default=None)
    secret_word: Optional[str] = field(default=None)
    secret_word_choices: Optional[dict[str, Any]] = field(default=None)
    secret_word_indexes: Optional[List[str]] = field(default=None)
    secret_word_salt: Optional[str] = field(default=None)
    secret_word_token: Optional[str] = field(default=None)
    security_roles: Optional[List[Role]] = field(default=None)
    should_enter_condition: Optional[bool] = field(default=None)
    staff_features: Optional[List[Feature]] = field(default=None)
    staff_roles: Optional[List[Role]] = field(default=None)
    token: Optional[str] = field(default=None)
    user: Optional[User] = field(default=None)
    user_features: Optional[List[Feature]] = field(default=None)
    user_groups: Optional[List[BaseGroup]] = field(default=None)
    
