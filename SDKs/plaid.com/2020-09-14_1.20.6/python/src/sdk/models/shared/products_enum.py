from dataclasses import dataclass, field
from enum import Enum

class ProductsEnum(str, Enum):
    ASSETS = "assets"
    AUTH = "auth"
    BALANCE = "balance"
    IDENTITY = "identity"
    INVESTMENTS = "investments"
    LIABILITIES = "liabilities"
    PAYMENT_INITIATION = "payment_initiation"
    TRANSACTIONS = "transactions"
    CREDIT_DETAILS = "credit_details"
    INCOME = "income"
    INCOME_VERIFICATION = "income_verification"
    DEPOSIT_SWITCH = "deposit_switch"
    STANDING_ORDERS = "standing_orders"

