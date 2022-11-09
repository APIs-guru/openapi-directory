import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DepositSwitchTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DepositSwitchTokenCreateRequest;
}


export class DepositSwitchTokenCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  depositSwitchTokenCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
