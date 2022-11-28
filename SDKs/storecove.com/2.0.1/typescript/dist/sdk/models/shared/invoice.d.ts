import { SpeakeasyBase } from "../../../internal/utils";
import { AccountingCustomerParty } from "./accountingcustomerparty";
import { AccountingSupplierParty } from "./accountingsupplierparty";
import { AllowanceCharge } from "./allowancecharge";
import { Delivery } from "./delivery";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { InvoiceLine } from "./invoiceline";
import { PaymentMeans } from "./paymentmeans";
import { TaxSubtotal } from "./taxsubtotal";
export declare enum InvoiceTypeOfInvoiceEnum {
    ThreeHundredAndEighty = "380",
    ThreeHundredAndEightyOne = "381",
    ThreeHundredAndEightyFour = "384"
}
export declare enum InvoicePaymentMeansCodeEnum {
    OnlinePaymentService = "online_payment_service",
    BankCard = "bank_card",
    DirectDebit = "direct_debit",
    StandingAgreement = "standing_agreement",
    CreditTransfer = "credit_transfer",
    SeBankgiro = "se_bankgiro",
    SePlusgiro = "se_plusgiro",
    AunzNpp = "aunz_npp",
    Unknown = "",
    One = "1",
    Thirty = "30",
    ThirtyOne = "31",
    FortyTwo = "42",
    FortyEight = "48",
    FortyNine = "49",
    FiftySeven = "57",
    FiftyEight = "58"
}
/**
 * The payment terms of the invoice.
**/
export declare class InvoiceThePaymentTerms extends SpeakeasyBase {
    note?: string;
}
export declare enum InvoiceTaxExemptReasonEnum {
    Export = "export",
    ReverseCharge = "reverse_charge",
    ZeroRated = "zero_rated",
    Exempt = "exempt",
    OutsideScope = "outside_scope",
    IntraCommunity = "intra_community"
}
export declare enum InvoiceTaxSystemEnum {
    TaxLineAmounts = "tax_line_amounts",
    TaxLinePercentages = "tax_line_percentages",
    TaxNoTax = "tax_no_tax"
}
/**
 * The invoice to send.  Provide either invoice, or invoiceData, but not both.
**/
export declare class Invoice extends SpeakeasyBase {
    accountingCost?: string;
    accountingCustomerParty: AccountingCustomerParty;
    accountingSupplierParty?: AccountingSupplierParty;
    allowanceCharges?: AllowanceCharge[];
    amountIncludingVat: number;
    billingReference?: string;
    buyerReference?: string;
    consumerTaxMode?: boolean;
    contractDocumentReference?: string;
    delivery?: Delivery;
    documentCurrencyCode?: CurrencyCodeEnum;
    dueDate?: string;
    invoiceLines: InvoiceLine[];
    invoiceNumber: string;
    invoicePeriod?: string;
    invoiceType?: InvoiceTypeOfInvoiceEnum;
    issueDate: string;
    note?: string;
    orderReference?: string;
    paymentMeansArray?: PaymentMeans[];
    paymentMeansBic?: string;
    paymentMeansCode?: InvoicePaymentMeansCodeEnum;
    paymentMeansIban?: string;
    paymentMeansPaymentId?: string;
    paymentTerms?: InvoiceThePaymentTerms;
    prepaidAmount?: number;
    projectReference?: string;
    salesOrderId?: string;
    taxExemptReason?: InvoiceTaxExemptReasonEnum;
    taxPointDate?: string;
    taxSubtotals?: TaxSubtotal[];
    taxSystem?: InvoiceTaxSystemEnum;
    ublExtensions?: string[];
    vatReverseCharge?: boolean;
}
