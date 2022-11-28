import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CurrencyFormat
/** 
 * The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.
**/
export class CurrencyFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_symbol" })
  currencySymbol: string;

  @SpeakeasyMetadata({ data: "json, name=decimal_digits" })
  decimalDigits: number;

  @SpeakeasyMetadata({ data: "json, name=decimal_separator" })
  decimalSeparator: string;

  @SpeakeasyMetadata({ data: "json, name=display_symbol" })
  displaySymbol: boolean;

  @SpeakeasyMetadata({ data: "json, name=example_format" })
  exampleFormat: string;

  @SpeakeasyMetadata({ data: "json, name=group_separator" })
  groupSeparator: string;

  @SpeakeasyMetadata({ data: "json, name=iso_code" })
  isoCode: string;

  @SpeakeasyMetadata({ data: "json, name=symbol_first" })
  symbolFirst: boolean;
}
