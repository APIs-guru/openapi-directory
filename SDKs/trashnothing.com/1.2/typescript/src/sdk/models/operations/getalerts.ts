import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAlertsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Alert })
  alerts?: shared.Alert[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
