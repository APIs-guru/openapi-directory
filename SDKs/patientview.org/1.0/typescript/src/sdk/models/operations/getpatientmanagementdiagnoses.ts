import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPatientManagementDiagnosesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Code })
  codes?: shared.Code[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
