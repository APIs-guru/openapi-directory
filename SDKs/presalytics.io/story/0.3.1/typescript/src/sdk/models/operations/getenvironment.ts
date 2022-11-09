import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEnvironment200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  problemDetail?: any;
}
