import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DepositSwitchGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DepositSwitchGetRequest;
}


export class DepositSwitchGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  depositSwitchGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
