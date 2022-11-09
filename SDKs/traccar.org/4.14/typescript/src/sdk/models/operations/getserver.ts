import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  server?: shared.Server;

  @Metadata()
  statusCode: number;
}
