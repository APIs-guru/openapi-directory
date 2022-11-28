import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaymentMeansCodeEnum {
    CreditTransfer = "credit_transfer",
    DirectDebit = "direct_debit",
    BankCard = "bank_card",
    CreditCard = "credit_card",
    OnlinePaymentService = "online_payment_service",
    StandingAgreement = "standing_agreement",
    AunzNpp = "aunz_npp",
    AunzNppPayid = "aunz_npp_payid",
    AunzNppPayto = "aunz_npp_payto",
    AunzBpay = "aunz_bpay",
    AunzPostbillpay = "aunz_postbillpay",
    AunzUri = "aunz_uri",
    SeBankgiro = "se_bankgiro",
    SePlusgiro = "se_plusgiro",
    SgGiro = "sg_giro",
    SgCard = "sg_card",
    SgPaynow = "sg_paynow"
}
/**
 * A PaymentMeans is a way to pay the invoice.
**/
export declare class PaymentMeans extends SpeakeasyBase {
    account?: string;
    brancheCode?: string;
    code: PaymentMeansCodeEnum;
    holder?: string;
    mandate?: string;
    network?: string;
    paymentId?: string;
}
