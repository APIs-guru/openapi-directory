import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DepositSwitchCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DepositSwitchCreateRequest;
}


export class DepositSwitchCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  depositSwitchCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
