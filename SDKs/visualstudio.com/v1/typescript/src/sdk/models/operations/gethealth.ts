import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHealthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
