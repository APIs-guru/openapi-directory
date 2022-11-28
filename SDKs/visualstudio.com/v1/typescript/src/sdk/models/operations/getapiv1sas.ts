import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1SasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata({ elemType: shared.ScopedSecretResultBody })
  scopedSecretResultBodies?: shared.ScopedSecretResultBody[];

  @SpeakeasyMetadata()
  statusCode: number;
}
