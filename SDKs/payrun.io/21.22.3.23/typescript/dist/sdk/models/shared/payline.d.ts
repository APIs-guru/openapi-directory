import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PayLinePayLinePayCodeTypeEnum {
    NotSet = "NotSet",
    Payment = "Payment",
    Deduction = "Deduction"
}
export declare class PayLinePayLine extends SpeakeasyBase {
    calculator?: string;
    description?: string;
    generated?: Date;
    payCode?: string;
    payCodeType?: PayLinePayLinePayCodeTypeEnum;
    payRunSequence?: number;
    paymentDate?: Date;
    taxPeriod?: number;
    taxYear?: number;
    value?: number;
}
export declare class PayLine extends SpeakeasyBase {
    payLine?: PayLinePayLine;
}
