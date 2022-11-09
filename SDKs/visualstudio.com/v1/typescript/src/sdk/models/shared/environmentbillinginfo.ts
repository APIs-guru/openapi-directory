import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Sku } from "./sku";


export class EnvironmentBillingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sku" })
  sku?: Sku;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
