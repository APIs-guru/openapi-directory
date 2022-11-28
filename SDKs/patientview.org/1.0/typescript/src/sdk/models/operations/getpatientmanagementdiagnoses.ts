import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPatientManagementDiagnosesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Code })
  codes?: shared.Code[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
