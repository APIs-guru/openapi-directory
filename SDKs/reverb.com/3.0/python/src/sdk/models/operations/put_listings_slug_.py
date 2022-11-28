from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutListingsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutListingsSlugRequestBodyCategories:
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    
class PutListingsSlugRequestBodyConditionUUIDEnum(str, Enum):
    FBF35668_96A0_4BAA_BCDE_AB18D6B1B329 = "fbf35668-96a0-4baa-bcde-ab18d6b1b329"
    SIXA9DFCAD_600B_46C8_9E08_CE6E5057921E = "6a9dfcad-600b-46c8-9e08-ce6e5057921e"
    NINETY_EIGHT_MILLION_SEVEN_HUNDRED_AND_SEVENTY_SEVEN_THOUSAND_EIGHT_HUNDRED_AND_EIGHTY_SIX_76D0_44C8_865E_BB40E669E934 = "98777886-76d0-44c8-865e-bb40e669e934"
    F7A3F48C_972A_44C6_B01A_0CD27488D3F6 = "f7a3f48c-972a-44c6-b01a-0cd27488d3f6"
    AE4D9114_1BD7_4EC5_A4BA_6653AF5AC84D = "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d"
    DF268AD1_C462_4BA6_B6DB_E007E23922EA = "df268ad1-c462-4ba6-b6db-e007e23922ea"
    AC5B9C1E_DC78_466D_B0B3_7CF712967A48 = "ac5b9c1e-dc78-466d-b0b3-7cf712967a48"
    SIXDB7DF88_293B_4017_A1C1_CDB5E599FA1A = "6db7df88-293b-4017-a1c1-cdb5e599fa1a"
    NINE_MILLION_TWO_HUNDRED_AND_TWENTY_FIVE_THOUSAND_TWO_HUNDRED_AND_EIGHTY_THREEF_60C2_4413_AD18_1F5EBA7A856F = "9225283f-60c2-4413-ad18-1f5eba7a856f"
    SEVENC3F45DE_2AE0_4C81_8400_FDB6B1D74890 = "7c3f45de-2ae0-4c81-8400-fdb6b1d74890"


@dataclass_json
@dataclass
class PutListingsSlugRequestBodyCondition:
    r"""PutListingsSlugRequestBodyCondition
    Condition
    """
    
    uuid: PutListingsSlugRequestBodyConditionUUIDEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    
class PutListingsSlugRequestBodyExclusiveChannelEnum(str, Enum):
    SELLER_SITE = "seller_site"
    REVERB = "reverb"
    NONE = "none"


@dataclass_json
@dataclass
class PutListingsSlugRequestBodyLocation:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locality') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
class PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum(str, Enum):
    DAYS = "days"
    WEEKS = "weeks"


@dataclass_json
@dataclass
class PutListingsSlugRequestBodyPreorderInfo:
    r"""PutListingsSlugRequestBodyPreorderInfo
    Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.
    """
    
    lead_time_unit: PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lead_time_unit') }})
    lead_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lead_time') }})
    ship_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date') }})
    
class PutListingsSlugRequestBodyPriceCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"
    EUR = "EUR"
    GBP = "GBP"
    AUD = "AUD"
    JPY = "JPY"
    NZD = "NZD"
    MXN = "MXN"


@dataclass_json
@dataclass
class PutListingsSlugRequestBodyPrice:
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: PutListingsSlugRequestBodyPriceCurrencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclass_json
@dataclass
class PutListingsSlugRequestBodySeller:
    paypal_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paypal_email') }})
    
class PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"
    EUR = "EUR"
    GBP = "GBP"
    AUD = "AUD"
    JPY = "JPY"
    NZD = "NZD"
    MXN = "MXN"


@dataclass_json
@dataclass
class PutListingsSlugRequestBodyShippingRatesRate:
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclass_json
@dataclass
class PutListingsSlugRequestBodyShippingRates:
    rate: Optional[PutListingsSlugRequestBodyShippingRatesRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region_code') }})
    

@dataclass_json
@dataclass
class PutListingsSlugRequestBodyShipping:
    local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local') }})
    rates: Optional[List[PutListingsSlugRequestBodyShippingRates]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    

@dataclass_json
@dataclass
class PutListingsSlugRequestBodyVideos:
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclass
class PutListingsSlugRequestBody:
    categories: Optional[List[PutListingsSlugRequestBodyCategories]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    condition: Optional[PutListingsSlugRequestBodyCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    exclusive_channel: Optional[PutListingsSlugRequestBodyExclusiveChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusive_channel') }})
    finish: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finish') }})
    has_inventory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_inventory') }})
    inventory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory') }})
    location: Optional[PutListingsSlugRequestBodyLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    multi_item: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multi_item') }})
    offers_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offers_enabled') }})
    origin_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin_country_code') }})
    photos: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos') }})
    preorder_info: Optional[PutListingsSlugRequestBodyPreorderInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preorder_info') }})
    price: Optional[PutListingsSlugRequestBodyPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    prop_65_warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prop_65_warning') }})
    publish: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publish') }})
    seller: Optional[PutListingsSlugRequestBodySeller] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    seller_cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller_cost') }})
    shipping: Optional[PutListingsSlugRequestBodyShipping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping') }})
    shipping_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_profile_id') }})
    shipping_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_profile_name') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    sold_as_is: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sold_as_is') }})
    storage_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_location') }})
    tax_exempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_exempt') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    upc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upc') }})
    upc_does_not_apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upc_does_not_apply') }})
    videos: Optional[List[PutListingsSlugRequestBodyVideos]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass
class PutListingsSlugSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutListingsSlugRequest:
    path_params: PutListingsSlugPathParams = field()
    security: PutListingsSlugSecurity = field()
    request: Optional[PutListingsSlugRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutListingsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
