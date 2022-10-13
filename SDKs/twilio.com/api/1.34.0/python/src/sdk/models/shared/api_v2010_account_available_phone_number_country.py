from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIV2010AccountAvailablePhoneNumberCountry:
    beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beta' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subresource_uris' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
