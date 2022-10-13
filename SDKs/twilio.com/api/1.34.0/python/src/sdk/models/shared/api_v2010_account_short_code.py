from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class APIV2010AccountShortCodeSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class APIV2010AccountShortCodeSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class APIV2010AccountShortCode:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    short_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_code' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sms_fallback_method: Optional[APIV2010AccountShortCodeSmsFallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_fallback_method' }})
    sms_fallback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_fallback_url' }})
    sms_method: Optional[APIV2010AccountShortCodeSmsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_method' }})
    sms_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_url' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
