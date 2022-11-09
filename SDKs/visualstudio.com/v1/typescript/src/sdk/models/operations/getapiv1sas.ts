import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1SasResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata({ elemType: shared.ScopedSecretResultBody })
  scopedSecretResultBodies?: shared.ScopedSecretResultBody[];

  @Metadata()
  statusCode: number;
}
