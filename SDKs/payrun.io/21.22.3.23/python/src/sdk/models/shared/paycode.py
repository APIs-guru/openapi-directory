from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayCodePayCodeNominalCode:
    r"""PayCodePayCodeNominalCode
    The pay codes' nominal code
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class PayCodePayCodeRegionEnum(str, Enum):
    NOT_SET = "NotSet"
    ENGLAND = "England"
    SCOTLAND = "Scotland"
    WALES = "Wales"

class PayCodePayCodeTerritoryEnum(str, Enum):
    UNITED_KINGDOM = "UnitedKingdom"

class PayCodePayCodeTypeEnum(str, Enum):
    NOT_SET = "NotSet"
    PAYMENT = "Payment"
    DEDUCTION = "Deduction"


@dataclass_json
@dataclass
class PayCodePayCode:
    benefit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Benefit') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    effective_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectiveDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetaData') }})
    niable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Niable') }})
    nominal_code: Optional[PayCodePayCodeNominalCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NominalCode') }})
    non_arrestable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonArrestable') }})
    notional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notional') }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Readonly') }})
    region: Optional[PayCodePayCodeRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    taxable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Taxable') }})
    territory: Optional[PayCodePayCodeTerritoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Territory') }})
    type: Optional[PayCodePayCodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class PayCode:
    pay_code: Optional[PayCodePayCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayCode') }})
    
