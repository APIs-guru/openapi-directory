import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DepositSwitchTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DepositSwitchTokenCreateRequest;
}


export class DepositSwitchTokenCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  depositSwitchTokenCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
