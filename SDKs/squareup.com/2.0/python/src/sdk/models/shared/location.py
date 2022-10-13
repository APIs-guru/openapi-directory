from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import businesshours
from . import coordinates
from . import taxids


@dataclass_json
@dataclass
class Location:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    business_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business_email' }})
    business_hours: Optional[businesshours.BusinessHours] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business_hours' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business_name' }})
    capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    coordinates: Optional[coordinates.Coordinates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    facebook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facebook_url' }})
    full_format_logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full_format_logo_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instagram_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instagram_username' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language_code' }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_url' }})
    mcc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcc' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    pos_background_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pos_background_url' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tax_ids: Optional[taxids.TaxIds] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_ids' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    twitter_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twitter_username' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website_url' }})
    
