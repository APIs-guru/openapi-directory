from dataclasses import dataclass, field
from typing import Enum

class ObjectGroupEnum(str, Enum):
    ACCOUNT = "Account"
    BANK_TRANSACTION = "BankTransaction"
    CONTACT = "Contact"
    CREDIT_NOTE = "CreditNote"
    INVOICE = "Invoice"
    ITEM = "Item"
    MANUAL_JOURNAL = "ManualJournal"
    OVERPAYMENT = "Overpayment"
    PAYMENT = "Payment"
    PREPAYMENT = "Prepayment"
    RECEIPT = "Receipt"

