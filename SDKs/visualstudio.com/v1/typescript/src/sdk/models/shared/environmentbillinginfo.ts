import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sku } from "./sku";



export class EnvironmentBillingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: Sku;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
