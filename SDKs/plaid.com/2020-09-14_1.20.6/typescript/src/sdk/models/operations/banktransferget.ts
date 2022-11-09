import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BankTransferGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BankTransferGetRequest;
}


export class BankTransferGetResponse extends SpeakeasyBase {
  @Metadata()
  bankTransferGetResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
