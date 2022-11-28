import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLatestPlatformVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  componentVersion?: shared.ComponentVersion;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
