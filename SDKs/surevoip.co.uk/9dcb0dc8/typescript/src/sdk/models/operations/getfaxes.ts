import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFaxesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
