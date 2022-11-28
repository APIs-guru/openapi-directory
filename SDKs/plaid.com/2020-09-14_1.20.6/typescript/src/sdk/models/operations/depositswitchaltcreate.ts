import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DepositSwitchAltCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DepositSwitchAltCreateRequest;
}


export class DepositSwitchAltCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  depositSwitchAltCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
