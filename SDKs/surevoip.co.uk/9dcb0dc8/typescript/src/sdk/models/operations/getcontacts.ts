import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContactsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
