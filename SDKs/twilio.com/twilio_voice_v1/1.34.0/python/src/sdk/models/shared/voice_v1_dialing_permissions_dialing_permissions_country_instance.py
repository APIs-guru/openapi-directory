from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VoiceV1DialingPermissionsDialingPermissionsCountryInstance:
    continent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continent' }})
    country_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_codes' }})
    high_risk_special_numbers_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high_risk_special_numbers_enabled' }})
    high_risk_tollfraud_numbers_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high_risk_tollfraud_numbers_enabled' }})
    iso_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_code' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    low_risk_numbers_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'low_risk_numbers_enabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
