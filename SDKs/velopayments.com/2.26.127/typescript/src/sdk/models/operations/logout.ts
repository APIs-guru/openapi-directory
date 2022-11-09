import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;
}
