import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAliasResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliasName" })
  aliasName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=shortUrl" })
  shortUrl?: string;
}
