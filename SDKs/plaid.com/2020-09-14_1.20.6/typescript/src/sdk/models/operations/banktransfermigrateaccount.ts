import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BankTransferMigrateAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BankTransferMigrateAccountRequest;
}


export class BankTransferMigrateAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankTransferMigrateAccountResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
