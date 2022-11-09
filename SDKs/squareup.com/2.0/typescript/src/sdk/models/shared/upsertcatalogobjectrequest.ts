import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CatalogObject } from "./catalogobject";


export class UpsertCatalogObjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=object" })
  object: CatalogObject;
}
