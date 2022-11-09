import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountingCustomerParty } from "./accountingcustomerparty";
import { AccountingSupplierParty } from "./accountingsupplierparty";
import { AllowanceCharge } from "./allowancecharge";
import { Delivery } from "./delivery";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { InvoiceLine } from "./invoiceline";
import { PaymentMeans } from "./paymentmeans";
import { TaxSubtotal } from "./taxsubtotal";

export enum InvoiceTypeOfInvoiceEnum {
    ThreeHundredAndEighty = "380"
,    ThreeHundredAndEightyOne = "381"
,    ThreeHundredAndEightyFour = "384"
}

export enum InvoicePaymentMeansCodeEnum {
    OnlinePaymentService = "online_payment_service"
,    BankCard = "bank_card"
,    DirectDebit = "direct_debit"
,    StandingAgreement = "standing_agreement"
,    CreditTransfer = "credit_transfer"
,    SeBankgiro = "se_bankgiro"
,    SePlusgiro = "se_plusgiro"
,    AunzNpp = "aunz_npp"
,    Unknown = ""
,    One = "1"
,    Thirty = "30"
,    ThirtyOne = "31"
,    FortyTwo = "42"
,    FortyEight = "48"
,    FortyNine = "49"
,    FiftySeven = "57"
,    FiftyEight = "58"
}


// InvoiceThePaymentTerms
/** 
 * The payment terms of the invoice.
**/
export class InvoiceThePaymentTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: string;
}

export enum InvoiceTaxExemptReasonEnum {
    Export = "export"
,    ReverseCharge = "reverse_charge"
,    ZeroRated = "zero_rated"
,    Exempt = "exempt"
,    OutsideScope = "outside_scope"
,    IntraCommunity = "intra_community"
}

export enum InvoiceTaxSystemEnum {
    TaxLineAmounts = "tax_line_amounts"
,    TaxLinePercentages = "tax_line_percentages"
,    TaxNoTax = "tax_no_tax"
}


// Invoice
/** 
 * The invoice to send.  Provide either invoice, or invoiceData, but not both.
**/
export class Invoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountingCost" })
  accountingCost?: string;

  @Metadata({ data: "json, name=accountingCustomerParty" })
  accountingCustomerParty: AccountingCustomerParty;

  @Metadata({ data: "json, name=accountingSupplierParty" })
  accountingSupplierParty?: AccountingSupplierParty;

  @Metadata({ data: "json, name=allowanceCharges", elemType: shared.AllowanceCharge })
  allowanceCharges?: AllowanceCharge[];

  @Metadata({ data: "json, name=amountIncludingVat" })
  amountIncludingVat: number;

  @Metadata({ data: "json, name=billingReference" })
  billingReference?: string;

  @Metadata({ data: "json, name=buyerReference" })
  buyerReference?: string;

  @Metadata({ data: "json, name=consumerTaxMode" })
  consumerTaxMode?: boolean;

  @Metadata({ data: "json, name=contractDocumentReference" })
  contractDocumentReference?: string;

  @Metadata({ data: "json, name=delivery" })
  delivery?: Delivery;

  @Metadata({ data: "json, name=documentCurrencyCode" })
  documentCurrencyCode?: CurrencyCodeEnum;

  @Metadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @Metadata({ data: "json, name=invoiceLines", elemType: shared.InvoiceLine })
  invoiceLines: InvoiceLine[];

  @Metadata({ data: "json, name=invoiceNumber" })
  invoiceNumber: string;

  @Metadata({ data: "json, name=invoicePeriod" })
  invoicePeriod?: string;

  @Metadata({ data: "json, name=invoiceType" })
  invoiceType?: InvoiceTypeOfInvoiceEnum;

  @Metadata({ data: "json, name=issueDate" })
  issueDate: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=orderReference" })
  orderReference?: string;

  @Metadata({ data: "json, name=paymentMeansArray", elemType: shared.PaymentMeans })
  paymentMeansArray?: PaymentMeans[];

  @Metadata({ data: "json, name=paymentMeansBic" })
  paymentMeansBic?: string;

  @Metadata({ data: "json, name=paymentMeansCode" })
  paymentMeansCode?: InvoicePaymentMeansCodeEnum;

  @Metadata({ data: "json, name=paymentMeansIban" })
  paymentMeansIban?: string;

  @Metadata({ data: "json, name=paymentMeansPaymentId" })
  paymentMeansPaymentId?: string;

  @Metadata({ data: "json, name=paymentTerms" })
  paymentTerms?: InvoiceThePaymentTerms;

  @Metadata({ data: "json, name=prepaidAmount" })
  prepaidAmount?: number;

  @Metadata({ data: "json, name=projectReference" })
  projectReference?: string;

  @Metadata({ data: "json, name=salesOrderId" })
  salesOrderId?: string;

  @Metadata({ data: "json, name=taxExemptReason" })
  taxExemptReason?: InvoiceTaxExemptReasonEnum;

  @Metadata({ data: "json, name=taxPointDate" })
  taxPointDate?: string;

  @Metadata({ data: "json, name=taxSubtotals", elemType: shared.TaxSubtotal })
  taxSubtotals?: TaxSubtotal[];

  @Metadata({ data: "json, name=taxSystem" })
  taxSystem?: InvoiceTaxSystemEnum;

  @Metadata({ data: "json, name=ublExtensions" })
  ublExtensions?: string[];

  @Metadata({ data: "json, name=vatReverseCharge" })
  vatReverseCharge?: boolean;
}
