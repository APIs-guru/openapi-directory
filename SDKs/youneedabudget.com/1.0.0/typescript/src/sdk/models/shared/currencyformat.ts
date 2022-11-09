import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CurrencyFormat
/** 
 * The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.
**/
export class CurrencyFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_symbol" })
  currencySymbol: string;

  @Metadata({ data: "json, name=decimal_digits" })
  decimalDigits: number;

  @Metadata({ data: "json, name=decimal_separator" })
  decimalSeparator: string;

  @Metadata({ data: "json, name=display_symbol" })
  displaySymbol: boolean;

  @Metadata({ data: "json, name=example_format" })
  exampleFormat: string;

  @Metadata({ data: "json, name=group_separator" })
  groupSeparator: string;

  @Metadata({ data: "json, name=iso_code" })
  isoCode: string;

  @Metadata({ data: "json, name=symbol_first" })
  symbolFirst: boolean;
}
