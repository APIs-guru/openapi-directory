import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTimezoneTxtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTextResponse?: string;

  @Metadata()
  statusCode: number;
}
