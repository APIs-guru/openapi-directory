import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDescriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
