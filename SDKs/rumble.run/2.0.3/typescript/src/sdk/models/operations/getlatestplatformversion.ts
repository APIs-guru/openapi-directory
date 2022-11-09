import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLatestPlatformVersionResponse extends SpeakeasyBase {
  @Metadata()
  componentVersion?: shared.ComponentVersion;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
