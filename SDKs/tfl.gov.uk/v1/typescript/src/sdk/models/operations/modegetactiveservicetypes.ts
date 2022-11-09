import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ModeGetActiveServiceTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesActiveServiceType })
  tflApiPresentationEntitiesActiveServiceTypes?: shared.TflApiPresentationEntitiesActiveServiceType[];
}
