import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
