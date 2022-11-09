import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PayItem } from "./payitem";


export class PayItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayItems" })
  payItems?: PayItem;
}
