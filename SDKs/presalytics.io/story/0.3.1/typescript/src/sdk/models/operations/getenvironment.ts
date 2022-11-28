import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEnvironment200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
