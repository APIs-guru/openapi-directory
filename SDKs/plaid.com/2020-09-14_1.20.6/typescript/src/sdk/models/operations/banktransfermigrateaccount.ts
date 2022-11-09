import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BankTransferMigrateAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BankTransferMigrateAccountRequest;
}


export class BankTransferMigrateAccountResponse extends SpeakeasyBase {
  @Metadata()
  bankTransferMigrateAccountResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
