import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSupportedCurrenciesV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supportedCurrencyResponseV2?: shared.SupportedCurrencyResponseV2;
}
