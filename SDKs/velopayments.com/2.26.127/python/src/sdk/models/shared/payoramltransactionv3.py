from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PayorAmlTransactionV3:
    credit: Optional[int] = field(default=None)
    credit_currency: Optional[str] = field(default=None)
    date_funding_requested: Optional[str] = field(default=None)
    debit: Optional[int] = field(default=None)
    debit_currency: Optional[str] = field(default=None)
    funding_type: Optional[str] = field(default=None)
    fx_applied: Optional[float] = field(default=None)
    payee_type: Optional[str] = field(default=None)
    payment_amount: Optional[int] = field(default=None)
    payment_currency: Optional[str] = field(default=None)
    payment_memo: Optional[str] = field(default=None)
    payment_rails: Optional[str] = field(default=None)
    payment_status: Optional[str] = field(default=None)
    payor_payment_id: Optional[str] = field(default=None)
    reject_reason: Optional[str] = field(default=None)
    remote_id: Optional[str] = field(default=None)
    report_transaction_type: Optional[str] = field(default=None)
    return_code: Optional[str] = field(default=None)
    return_description: Optional[str] = field(default=None)
    return_fee: Optional[str] = field(default=None)
    return_fee_currency: Optional[str] = field(default=None)
    return_fee_description: Optional[str] = field(default=None)
    source_account: Optional[str] = field(default=None)
    transaction_date: Optional[date] = field(default=None)
    transaction_time: Optional[str] = field(default=None)
    
