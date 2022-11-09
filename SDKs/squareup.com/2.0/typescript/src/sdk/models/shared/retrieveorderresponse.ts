import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Order } from "./order";


export class RetrieveOrderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=order" })
  order?: Order;
}
