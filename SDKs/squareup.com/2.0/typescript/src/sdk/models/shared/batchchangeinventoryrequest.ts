import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryChange } from "./inventorychange";


export class BatchChangeInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: shared.InventoryChange })
  changes?: InventoryChange[];

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=ignore_unchanged_counts" })
  ignoreUnchangedCounts?: boolean;
}
