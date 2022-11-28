from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ErrorTypeEnum(str, Enum):
    INVALID_REQUEST = "invalid-request"
    INVALID_APPLICATION = "invalid-application"
    INVALID_FEED_CONNECTION = "invalid-feed-connection"
    DUPLICATE_STATEMENT = "duplicate-statement"
    INVALID_END_BALANCE = "invalid-end-balance"
    INVALID_START_AND_END_DATE = "invalid-start-and-end-date"
    INVALID_START_DATE = "invalid-start-date"
    INTERNAL_ERROR = "internal-error"
    FEED_ALREADY_CONNECTED_IN_CURRENT_ORGANISATION = "feed-already-connected-in-current-organisation"
    INVALID_END_DATE = "invalid-end-date"
    STATEMENT_NOT_FOUND = "statement-not-found"
    FEED_CONNECTED_IN_DIFFERENT_ORGANISATION = "feed-connected-in-different-organisation"
    FEED_ALREADY_CONNECTED_IN_DIFFERENT_ORGANISATION = "feed-already-connected-in-different-organisation"
    BANK_FEED_NOT_FOUND = "bank-feed-not-found"
    INVALID_COUNTRY_SPECIFIED = "invalid-country-specified"
    INVALID_ORGANISATION_BANK_FEEDS = "invalid-organisation-bank-feeds"
    INVALID_ORGANISATION_MULTI_CURRENCY = "invalid-organisation-multi-currency"
    INVALID_FEED_CONNECTION_FOR_ORGANISATION = "invalid-feed-connection-for-organisation"
    INVALID_USER_ROLE = "invalid-user-role"
    ACCOUNT_NOT_VALID = "account-not-valid"


@dataclass_json
@dataclass
class Error:
    r"""Error
    On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.
    """
    
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[ErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
