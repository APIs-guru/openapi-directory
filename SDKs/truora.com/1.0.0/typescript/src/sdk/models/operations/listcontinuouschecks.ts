import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListContinuousChecksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listContinuousChecksOutput?: shared.ListContinuousChecksOutput;

  @Metadata()
  statusCode: number;
}
