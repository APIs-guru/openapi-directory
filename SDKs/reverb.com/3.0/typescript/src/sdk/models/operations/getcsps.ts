import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCspsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
