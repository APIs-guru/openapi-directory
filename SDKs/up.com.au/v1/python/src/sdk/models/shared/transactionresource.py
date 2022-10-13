from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import moneyobject
from . import moneyobject
from . import moneyobject
from . import moneyobject


@dataclass_json
@dataclass
class TransactionResourceAttributesCashback:
    amount: moneyobject.MoneyObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesForeignAmount:
    currency_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_in_base_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueInBaseUnits' }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesHoldInfoForeignAmount:
    currency_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_in_base_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueInBaseUnits' }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesHoldInfo:
    amount: moneyobject.MoneyObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    foreign_amount: TransactionResourceAttributesHoldInfoForeignAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foreignAmount' }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesRoundUpBoostPortion:
    currency_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_in_base_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueInBaseUnits' }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesRoundUp:
    amount: moneyobject.MoneyObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    boost_portion: TransactionResourceAttributesRoundUpBoostPortion = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boostPortion' }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributes:
    amount: moneyobject.MoneyObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    cashback: TransactionResourceAttributesCashback = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cashback' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    foreign_amount: TransactionResourceAttributesForeignAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foreignAmount' }})
    hold_info: TransactionResourceAttributesHoldInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holdInfo' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    raw_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawText' }})
    round_up: TransactionResourceAttributesRoundUp = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roundUp' }})
    settled_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settledAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class TransactionResourceLinks:
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsAccountData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsAccountLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsAccount:
    data: TransactionResourceRelationshipsAccountData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[TransactionResourceRelationshipsAccountLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsCategoryData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsCategoryLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsCategory:
    data: TransactionResourceRelationshipsCategoryData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[TransactionResourceRelationshipsCategoryLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsParentCategoryData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsParentCategoryLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsParentCategory:
    data: TransactionResourceRelationshipsParentCategoryData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[TransactionResourceRelationshipsParentCategoryLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsTagsData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsTagsLinks:
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsTags:
    data: List[TransactionResourceRelationshipsTagsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[TransactionResourceRelationshipsTagsLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationships:
    account: TransactionResourceRelationshipsAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    category: TransactionResourceRelationshipsCategory = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    parent_category: TransactionResourceRelationshipsParentCategory = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentCategory' }})
    tags: TransactionResourceRelationshipsTags = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class TransactionResource:
    attributes: TransactionResourceAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[TransactionResourceLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: TransactionResourceRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
