from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class PaymentsEnumCaptureEnum(str, Enum):
    PAYMENT_CARD_NUMBER = "payment-card-number"
    EXPIRATION_DATE = "expiration-date"
    SECURITY_CODE = "security-code"
    POSTAL_CODE = "postal-code"
    BANK_ROUTING_NUMBER = "bank-routing-number"
    BANK_ACCOUNT_NUMBER = "bank-account-number"

