import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DepositSwitchAltCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DepositSwitchAltCreateRequest;
}


export class DepositSwitchAltCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  depositSwitchAltCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
