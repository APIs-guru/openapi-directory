import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPatientManagementLookupTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LookupType })
  lookupTypes?: shared.LookupType[];

  @Metadata()
  statusCode: number;
}
