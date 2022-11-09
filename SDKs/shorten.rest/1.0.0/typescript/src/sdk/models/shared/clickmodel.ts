import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClickModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=aliasId" })
  aliasId?: string;

  @Metadata({ data: "json, name=browser" })
  browser?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: number;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=referrer" })
  referrer?: string;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;
}
