from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaymentMeansCodeEnum(str, Enum):
    CREDIT_TRANSFER = "credit_transfer"
    DIRECT_DEBIT = "direct_debit"
    BANK_CARD = "bank_card"
    CREDIT_CARD = "credit_card"
    ONLINE_PAYMENT_SERVICE = "online_payment_service"
    STANDING_AGREEMENT = "standing_agreement"
    AUNZ_NPP = "aunz_npp"
    AUNZ_NPP_PAYID = "aunz_npp_payid"
    AUNZ_NPP_PAYTO = "aunz_npp_payto"
    AUNZ_BPAY = "aunz_bpay"
    AUNZ_POSTBILLPAY = "aunz_postbillpay"
    AUNZ_URI = "aunz_uri"
    SE_BANKGIRO = "se_bankgiro"
    SE_PLUSGIRO = "se_plusgiro"
    SG_GIRO = "sg_giro"
    SG_CARD = "sg_card"
    SG_PAYNOW = "sg_paynow"


@dataclass_json
@dataclass
class PaymentMeans:
    r"""PaymentMeans
    A PaymentMeans is a way to pay the invoice.
    """
    
    code: PaymentMeansCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    branche_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branche_code') }})
    holder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holder') }})
    mandate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandate') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentId') }})
    
