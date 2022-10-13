from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import money
from . import money
from . import bankaccountpaymentdetails
from . import address
from . import cardpaymentdetails
from . import cashpaymentdetails
from . import externalpaymentdetails
from . import processingfee
from . import money
from . import riskevaluation
from . import address
from . import money
from . import money
from . import digitalwalletdetails


@dataclass_json
@dataclass
class Payment:
    amount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount_money' }})
    app_fee_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_fee_money' }})
    approved_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved_money' }})
    bank_account_details: Optional[bankaccountpaymentdetails.BankAccountPaymentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_account_details' }})
    billing_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    buyer_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_email_address' }})
    capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    card_details: Optional[cardpaymentdetails.CardPaymentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_details' }})
    cash_details: Optional[cashpaymentdetails.CashPaymentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_details' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    delay_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delay_action' }})
    delay_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delay_duration' }})
    delayed_until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delayed_until' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    external_details: Optional[externalpaymentdetails.ExternalPaymentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_details' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    processing_fee: Optional[List[processingfee.ProcessingFee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_fee' }})
    receipt_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt_number' }})
    receipt_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt_url' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    refund_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund_ids' }})
    refunded_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_money' }})
    risk_evaluation: Optional[riskevaluation.RiskEvaluation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'risk_evaluation' }})
    shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_type' }})
    statement_description_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statement_description_identifier' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tip_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tip_money' }})
    total_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_money' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version_token' }})
    wallet_details: Optional[digitalwalletdetails.DigitalWalletDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wallet_details' }})
    
