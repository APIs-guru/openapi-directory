import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthLoginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LoginDto;
}


export class AuthLoginResponse extends SpeakeasyBase {
  @Metadata()
  authLogin200ApplicationOctetStreamBinaryString?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
