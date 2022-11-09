import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Order } from "./order";
import { OrderReward } from "./orderreward";


export class CalculateOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=order" })
  order: Order;

  @Metadata({ data: "json, name=proposed_rewards", elemType: shared.OrderReward })
  proposedRewards?: OrderReward[];
}
