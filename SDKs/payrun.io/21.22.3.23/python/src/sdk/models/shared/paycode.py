from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayCodePayCodeNominalCodeNominalCode:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    
class PayCodePayCodeRegionRegionEnum(str, Enum):
    NOT_SET = "NotSet"
    ENGLAND = "England"
    SCOTLAND = "Scotland"
    WALES = "Wales"

class PayCodePayCodeTerritoryTerritoryEnum(str, Enum):
    UNITED_KINGDOM = "UnitedKingdom"

class PayCodePayCodeTypeTypeEnum(str, Enum):
    NOT_SET = "NotSet"
    PAYMENT = "Payment"
    DEDUCTION = "Deduction"


@dataclass_json
@dataclass
class PayCodePayCodePayCode:
    benefit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Benefit' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectiveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    meta_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetaData' }})
    niable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Niable' }})
    nominal_code: Optional[PayCodePayCodeNominalCodeNominalCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NominalCode' }})
    non_arrestable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonArrestable' }})
    notional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notional' }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Readonly' }})
    region: Optional[PayCodePayCodeRegionRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }})
    taxable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Taxable' }})
    territory: Optional[PayCodePayCodeTerritoryTerritoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Territory' }})
    type: Optional[PayCodePayCodeTypeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class PayCode:
    pay_code: Optional[PayCodePayCodePayCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayCode' }})
    
