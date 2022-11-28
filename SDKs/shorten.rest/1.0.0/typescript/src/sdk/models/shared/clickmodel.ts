import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClickModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=aliasId" })
  aliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=browser" })
  browser?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=referrer" })
  referrer?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;
}
