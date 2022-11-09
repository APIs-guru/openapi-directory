import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DepositSwitchGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DepositSwitchGetRequest;
}


export class DepositSwitchGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  depositSwitchGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
