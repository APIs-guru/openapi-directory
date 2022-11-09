import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiReferencePolicyInterestsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GenericReferenceData })
  genericReferenceData?: shared.GenericReferenceData[];

  @Metadata()
  statusCode: number;
}
