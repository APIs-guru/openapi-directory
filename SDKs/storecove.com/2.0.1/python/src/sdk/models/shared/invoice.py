from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InvoiceTypeOfInvoiceEnum(str, Enum):
    THREE_HUNDRED_AND_EIGHTY = "380"
    THREE_HUNDRED_AND_EIGHTY_ONE = "381"
    THREE_HUNDRED_AND_EIGHTY_FOUR = "384"

class InvoicePaymentMeansCodeEnum(str, Enum):
    ONLINE_PAYMENT_SERVICE = "online_payment_service"
    BANK_CARD = "bank_card"
    DIRECT_DEBIT = "direct_debit"
    STANDING_AGREEMENT = "standing_agreement"
    CREDIT_TRANSFER = "credit_transfer"
    SE_BANKGIRO = "se_bankgiro"
    SE_PLUSGIRO = "se_plusgiro"
    AUNZ_NPP = "aunz_npp"
    UNKNOWN = ""
    ONE = "1"
    THIRTY = "30"
    THIRTY_ONE = "31"
    FORTY_TWO = "42"
    FORTY_EIGHT = "48"
    FORTY_NINE = "49"
    FIFTY_SEVEN = "57"
    FIFTY_EIGHT = "58"


@dataclass_json
@dataclass
class InvoiceThePaymentTerms:
    r"""InvoiceThePaymentTerms
    The payment terms of the invoice.
    """
    
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
class InvoiceTaxExemptReasonEnum(str, Enum):
    EXPORT = "export"
    REVERSE_CHARGE = "reverse_charge"
    ZERO_RATED = "zero_rated"
    EXEMPT = "exempt"
    OUTSIDE_SCOPE = "outside_scope"
    INTRA_COMMUNITY = "intra_community"

class InvoiceTaxSystemEnum(str, Enum):
    TAX_LINE_AMOUNTS = "tax_line_amounts"
    TAX_LINE_PERCENTAGES = "tax_line_percentages"
    TAX_NO_TAX = "tax_no_tax"


@dataclass_json
@dataclass
class Invoice:
    r"""Invoice
    The invoice to send.  Provide either invoice, or invoiceData, but not both.
    """
    
    accounting_customer_party: AccountingCustomerParty = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingCustomerParty') }})
    amount_including_vat: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountIncludingVat') }})
    invoice_lines: List[InvoiceLine] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceLines') }})
    invoice_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceNumber') }})
    issue_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueDate') }})
    accounting_cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingCost') }})
    accounting_supplier_party: Optional[AccountingSupplierParty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingSupplierParty') }})
    allowance_charges: Optional[List[AllowanceCharge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowanceCharges') }})
    billing_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingReference') }})
    buyer_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerReference') }})
    consumer_tax_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerTaxMode') }})
    contract_document_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractDocumentReference') }})
    delivery: Optional[Delivery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery') }})
    document_currency_code: Optional[CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentCurrencyCode') }})
    due_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    invoice_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoicePeriod') }})
    invoice_type: Optional[InvoiceTypeOfInvoiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceType') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    order_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderReference') }})
    payment_means_array: Optional[List[PaymentMeans]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansArray') }})
    payment_means_bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansBic') }})
    payment_means_code: Optional[InvoicePaymentMeansCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansCode') }})
    payment_means_iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansIban') }})
    payment_means_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansPaymentId') }})
    payment_terms: Optional[InvoiceThePaymentTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentTerms') }})
    prepaid_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidAmount') }})
    project_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectReference') }})
    sales_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesOrderId') }})
    tax_exempt_reason: Optional[InvoiceTaxExemptReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxExemptReason') }})
    tax_point_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxPointDate') }})
    tax_subtotals: Optional[List[TaxSubtotal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxSubtotals') }})
    tax_system: Optional[InvoiceTaxSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxSystem') }})
    ubl_extensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ublExtensions') }})
    vat_reverse_charge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatReverseCharge') }})
    
