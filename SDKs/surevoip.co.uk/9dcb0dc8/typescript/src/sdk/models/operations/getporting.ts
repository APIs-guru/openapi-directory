import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPortingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
