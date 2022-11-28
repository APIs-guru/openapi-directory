import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Alert })
  alerts?: shared.Alert[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
