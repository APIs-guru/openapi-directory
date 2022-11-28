import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPatientManagementLookupTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LookupType })
  lookupTypes?: shared.LookupType[];

  @SpeakeasyMetadata()
  statusCode: number;
}
