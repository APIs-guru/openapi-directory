import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServiceStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
