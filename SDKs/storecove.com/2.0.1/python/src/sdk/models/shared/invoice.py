from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accountingcustomerparty
from . import accountingsupplierparty
from . import allowancecharge
from . import delivery
from . import currencycode_enum
from . import invoiceline
from . import paymentmeans
from . import taxsubtotal

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
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    
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
    accounting_cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountingCost' }})
    accounting_customer_party: accountingcustomerparty.AccountingCustomerParty = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountingCustomerParty' }})
    accounting_supplier_party: Optional[accountingsupplierparty.AccountingSupplierParty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountingSupplierParty' }})
    allowance_charges: Optional[List[allowancecharge.AllowanceCharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowanceCharges' }})
    amount_including_vat: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountIncludingVat' }})
    billing_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingReference' }})
    buyer_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerReference' }})
    consumer_tax_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerTaxMode' }})
    contract_document_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contractDocumentReference' }})
    delivery: Optional[delivery.Delivery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery' }})
    document_currency_code: Optional[currencycode_enum.CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentCurrencyCode' }})
    due_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dueDate' }})
    invoice_lines: List[invoiceline.InvoiceLine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceLines' }})
    invoice_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceNumber' }})
    invoice_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoicePeriod' }})
    invoice_type: Optional[InvoiceTypeOfInvoiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceType' }})
    issue_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueDate' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    order_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderReference' }})
    payment_means_array: Optional[List[paymentmeans.PaymentMeans]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMeansArray' }})
    payment_means_bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMeansBic' }})
    payment_means_code: Optional[InvoicePaymentMeansCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMeansCode' }})
    payment_means_iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMeansIban' }})
    payment_means_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMeansPaymentId' }})
    payment_terms: Optional[InvoiceThePaymentTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentTerms' }})
    prepaid_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prepaidAmount' }})
    project_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectReference' }})
    sales_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesOrderId' }})
    tax_exempt_reason: Optional[InvoiceTaxExemptReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxExemptReason' }})
    tax_point_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxPointDate' }})
    tax_subtotals: Optional[List[taxsubtotal.TaxSubtotal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxSubtotals' }})
    tax_system: Optional[InvoiceTaxSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxSystem' }})
    ubl_extensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ublExtensions' }})
    vat_reverse_charge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatReverseCharge' }})
    
