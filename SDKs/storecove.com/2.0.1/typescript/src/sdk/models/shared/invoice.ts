import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountingCustomerParty } from "./accountingcustomerparty";
import { AccountingSupplierParty } from "./accountingsupplierparty";
import { AllowanceCharge } from "./allowancecharge";
import { Delivery } from "./delivery";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { InvoiceLine } from "./invoiceline";
import { PaymentMeans } from "./paymentmeans";
import { TaxSubtotal } from "./taxsubtotal";


export enum InvoiceTypeOfInvoiceEnum {
    ThreeHundredAndEighty = "380",
    ThreeHundredAndEightyOne = "381",
    ThreeHundredAndEightyFour = "384"
}

export enum InvoicePaymentMeansCodeEnum {
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


// InvoiceThePaymentTerms
/** 
 * The payment terms of the invoice.
**/
export class InvoiceThePaymentTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}

export enum InvoiceTaxExemptReasonEnum {
    Export = "export",
    ReverseCharge = "reverse_charge",
    ZeroRated = "zero_rated",
    Exempt = "exempt",
    OutsideScope = "outside_scope",
    IntraCommunity = "intra_community"
}

export enum InvoiceTaxSystemEnum {
    TaxLineAmounts = "tax_line_amounts",
    TaxLinePercentages = "tax_line_percentages",
    TaxNoTax = "tax_no_tax"
}


// Invoice
/** 
 * The invoice to send.  Provide either invoice, or invoiceData, but not both.
**/
export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingCost" })
  accountingCost?: string;

  @SpeakeasyMetadata({ data: "json, name=accountingCustomerParty" })
  accountingCustomerParty: AccountingCustomerParty;

  @SpeakeasyMetadata({ data: "json, name=accountingSupplierParty" })
  accountingSupplierParty?: AccountingSupplierParty;

  @SpeakeasyMetadata({ data: "json, name=allowanceCharges", elemType: AllowanceCharge })
  allowanceCharges?: AllowanceCharge[];

  @SpeakeasyMetadata({ data: "json, name=amountIncludingVat" })
  amountIncludingVat: number;

  @SpeakeasyMetadata({ data: "json, name=billingReference" })
  billingReference?: string;

  @SpeakeasyMetadata({ data: "json, name=buyerReference" })
  buyerReference?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerTaxMode" })
  consumerTaxMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contractDocumentReference" })
  contractDocumentReference?: string;

  @SpeakeasyMetadata({ data: "json, name=delivery" })
  delivery?: Delivery;

  @SpeakeasyMetadata({ data: "json, name=documentCurrencyCode" })
  documentCurrencyCode?: CurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceLines", elemType: InvoiceLine })
  invoiceLines: InvoiceLine[];

  @SpeakeasyMetadata({ data: "json, name=invoiceNumber" })
  invoiceNumber: string;

  @SpeakeasyMetadata({ data: "json, name=invoicePeriod" })
  invoicePeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceType" })
  invoiceType?: InvoiceTypeOfInvoiceEnum;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=orderReference" })
  orderReference?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMeansArray", elemType: PaymentMeans })
  paymentMeansArray?: PaymentMeans[];

  @SpeakeasyMetadata({ data: "json, name=paymentMeansBic" })
  paymentMeansBic?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMeansCode" })
  paymentMeansCode?: InvoicePaymentMeansCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=paymentMeansIban" })
  paymentMeansIban?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMeansPaymentId" })
  paymentMeansPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentTerms" })
  paymentTerms?: InvoiceThePaymentTerms;

  @SpeakeasyMetadata({ data: "json, name=prepaidAmount" })
  prepaidAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=projectReference" })
  projectReference?: string;

  @SpeakeasyMetadata({ data: "json, name=salesOrderId" })
  salesOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxExemptReason" })
  taxExemptReason?: InvoiceTaxExemptReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=taxPointDate" })
  taxPointDate?: string;

  @SpeakeasyMetadata({ data: "json, name=taxSubtotals", elemType: TaxSubtotal })
  taxSubtotals?: TaxSubtotal[];

  @SpeakeasyMetadata({ data: "json, name=taxSystem" })
  taxSystem?: InvoiceTaxSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=ublExtensions" })
  ublExtensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=vatReverseCharge" })
  vatReverseCharge?: boolean;
}
