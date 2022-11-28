import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.
**/
export declare class CurrencyFormat extends SpeakeasyBase {
    currencySymbol: string;
    decimalDigits: number;
    decimalSeparator: string;
    displaySymbol: boolean;
    exampleFormat: string;
    groupSeparator: string;
    isoCode: string;
    symbolFirst: boolean;
}
