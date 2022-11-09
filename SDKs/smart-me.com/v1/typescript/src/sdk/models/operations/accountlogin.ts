import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountLoginResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
