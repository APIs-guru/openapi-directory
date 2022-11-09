import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SpecNoTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
