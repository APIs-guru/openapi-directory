import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BankTransferCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BankTransferCreateRequest;
}


export class BankTransferCreateResponse extends SpeakeasyBase {
  @Metadata()
  bankTransferCreateResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
