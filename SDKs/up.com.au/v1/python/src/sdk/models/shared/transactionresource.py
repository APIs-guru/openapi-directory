from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactionResourceAttributesCashback:
    r"""TransactionResourceAttributesCashback
    If all or part of this transaction was instantly reimbursed in the
    form of cashback, details of the reimbursement.
    
    """
    
    amount: MoneyObject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesForeignAmount:
    r"""TransactionResourceAttributesForeignAmount
    The foreign currency amount of this transaction. This field will be
    `null` for domestic transactions. The amount was converted to the AUD
    amount reflected in the `amount` of this transaction. Refer to the
    `holdInfo` field for the original `foreignAmount` the transaction was
    `HELD` at.
    
    """
    
    currency_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_in_base_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInBaseUnits') }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesHoldInfoForeignAmount:
    r"""TransactionResourceAttributesHoldInfoForeignAmount
    The foreign currency amount of this transaction while in the `HELD`
    status. This field will be `null` for domestic transactions. The amount
    was converted to the AUD amount reflected in the `amount` field.
    
    """
    
    currency_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_in_base_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInBaseUnits') }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesHoldInfo:
    r"""TransactionResourceAttributesHoldInfo
    If this transaction is currently in the `HELD` status, or was ever in
    the `HELD` status, the `amount` and `foreignAmount` of the
    transaction while `HELD`.
    
    """
    
    amount: MoneyObject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    foreign_amount: TransactionResourceAttributesHoldInfoForeignAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('foreignAmount') }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesRoundUpBoostPortion:
    r"""TransactionResourceAttributesRoundUpBoostPortion
    The portion of the Round Up `amount` owing to boosted Round Ups,
    represented as a negative value. If no boost was added to the Round Up
    this field will be `null`.
    
    """
    
    currency_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_in_base_units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInBaseUnits') }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributesRoundUp:
    r"""TransactionResourceAttributesRoundUp
    Details of how this transaction was rounded-up. If no Round Up was
    applied this field will be `null`.
    
    """
    
    amount: MoneyObject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    boost_portion: TransactionResourceAttributesRoundUpBoostPortion = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('boostPortion') }})
    

@dataclass_json
@dataclass
class TransactionResourceAttributes:
    amount: MoneyObject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    cashback: TransactionResourceAttributesCashback = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashback') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    foreign_amount: TransactionResourceAttributesForeignAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('foreignAmount') }})
    hold_info: TransactionResourceAttributesHoldInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdInfo') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    raw_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawText') }})
    round_up: TransactionResourceAttributesRoundUp = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roundUp') }})
    settled_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settledAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class TransactionResourceLinks:
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsAccountData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsAccountLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsAccount:
    data: TransactionResourceRelationshipsAccountData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[TransactionResourceRelationshipsAccountLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsCategoryData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsCategoryLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsCategory:
    data: TransactionResourceRelationshipsCategoryData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[TransactionResourceRelationshipsCategoryLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsParentCategoryData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsParentCategoryLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsParentCategory:
    data: TransactionResourceRelationshipsParentCategoryData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[TransactionResourceRelationshipsParentCategoryLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsTagsData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsTagsLinks:
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationshipsTags:
    data: List[TransactionResourceRelationshipsTagsData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[TransactionResourceRelationshipsTagsLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class TransactionResourceRelationships:
    account: TransactionResourceRelationshipsAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    category: TransactionResourceRelationshipsCategory = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    parent_category: TransactionResourceRelationshipsParentCategory = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCategory') }})
    tags: TransactionResourceRelationshipsTags = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclass
class TransactionResource:
    attributes: TransactionResourceAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: TransactionResourceRelationships = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[TransactionResourceLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
