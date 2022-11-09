import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BankTransferBalanceGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BankTransferBalanceGetRequest;
}


export class BankTransferBalanceGetResponse extends SpeakeasyBase {
  @Metadata()
  bankTransferBalanceGetResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
