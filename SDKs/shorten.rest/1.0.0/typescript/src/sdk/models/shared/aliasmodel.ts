import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationModel } from "./destinationmodel";
import { MetaTagModel } from "./metatagmodel";
import { SnippetModel } from "./snippetmodel";



export class AliasModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: DestinationModel })
  destinations?: DestinationModel[];

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=metatags", elemType: MetaTagModel })
  metatags?: MetaTagModel[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=snippets", elemType: SnippetModel })
  snippets?: SnippetModel[];

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: number;
}
