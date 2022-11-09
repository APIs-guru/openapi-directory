import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PaymentMeansCodeEnum {
    CreditTransfer = "credit_transfer"
,    DirectDebit = "direct_debit"
,    BankCard = "bank_card"
,    CreditCard = "credit_card"
,    OnlinePaymentService = "online_payment_service"
,    StandingAgreement = "standing_agreement"
,    AunzNpp = "aunz_npp"
,    AunzNppPayid = "aunz_npp_payid"
,    AunzNppPayto = "aunz_npp_payto"
,    AunzBpay = "aunz_bpay"
,    AunzPostbillpay = "aunz_postbillpay"
,    AunzUri = "aunz_uri"
,    SeBankgiro = "se_bankgiro"
,    SePlusgiro = "se_plusgiro"
,    SgGiro = "sg_giro"
,    SgCard = "sg_card"
,    SgPaynow = "sg_paynow"
}


// PaymentMeans
/** 
 * A PaymentMeans is a way to pay the invoice.
**/
export class PaymentMeans extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=branche_code" })
  brancheCode?: string;

  @Metadata({ data: "json, name=code" })
  code: PaymentMeansCodeEnum;

  @Metadata({ data: "json, name=holder" })
  holder?: string;

  @Metadata({ data: "json, name=mandate" })
  mandate?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=paymentId" })
  paymentId?: string;
}
