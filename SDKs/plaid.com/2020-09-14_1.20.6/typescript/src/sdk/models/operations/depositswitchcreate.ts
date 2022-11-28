import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DepositSwitchCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DepositSwitchCreateRequest;
}


export class DepositSwitchCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  depositSwitchCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
