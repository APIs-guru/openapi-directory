import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTimezoneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listJsonResponse?: string[];

  @Metadata()
  statusCode: number;
}
