import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAliasResponseModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliasName" })
  aliasName?: string;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=shortUrl" })
  shortUrl?: string;
}
