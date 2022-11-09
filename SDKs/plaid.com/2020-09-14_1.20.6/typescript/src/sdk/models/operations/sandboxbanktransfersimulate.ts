import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SandboxBankTransferSimulateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SandboxBankTransferSimulateRequest;
}


export class SandboxBankTransferSimulateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sandboxBankTransferSimulateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
