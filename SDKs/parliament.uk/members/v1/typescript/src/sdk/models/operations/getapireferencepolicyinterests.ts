import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiReferencePolicyInterestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GenericReferenceData })
  genericReferenceData?: shared.GenericReferenceData[];

  @SpeakeasyMetadata()
  statusCode: number;
}
