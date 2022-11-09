import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogObjectBatch } from "./catalogobjectbatch";


export class BatchUpsertCatalogObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=batches", elemType: shared.CatalogObjectBatch })
  batches: CatalogObjectBatch[];

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;
}
