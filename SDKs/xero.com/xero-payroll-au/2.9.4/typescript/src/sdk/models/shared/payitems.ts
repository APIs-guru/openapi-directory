import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayItem } from "./payitem";



export class PayItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayItems" })
  payItems?: PayItem;
}
