import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InventoryAdjustmentGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=from_state" })
  fromState?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=root_adjustment_id" })
  rootAdjustmentId?: string;

  @Metadata({ data: "json, name=to_state" })
  toState?: string;
}
