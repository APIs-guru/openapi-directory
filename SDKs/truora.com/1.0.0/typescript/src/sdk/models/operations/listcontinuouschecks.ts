import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListContinuousChecksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listContinuousChecksOutput?: shared.ListContinuousChecksOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
