import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLatestAgentVersionResponse extends SpeakeasyBase {
  @Metadata()
  componentVersion?: shared.ComponentVersion;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
