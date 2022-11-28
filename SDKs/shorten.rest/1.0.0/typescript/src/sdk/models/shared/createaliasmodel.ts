import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationModel } from "./destinationmodel";
import { MetaTagModel } from "./metatagmodel";
import { SnippetModel } from "./snippetmodel";



export class CreateAliasModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: DestinationModel })
  destinations?: DestinationModel[];

  @SpeakeasyMetadata({ data: "json, name=metatags", elemType: MetaTagModel })
  metatags?: MetaTagModel[];

  @SpeakeasyMetadata({ data: "json, name=snippets", elemType: SnippetModel })
  snippets?: SnippetModel[];
}
