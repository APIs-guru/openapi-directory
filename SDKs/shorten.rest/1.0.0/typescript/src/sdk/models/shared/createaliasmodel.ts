import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationModel } from "./destinationmodel";
import { MetaTagModel } from "./metatagmodel";
import { SnippetModel } from "./snippetmodel";


export class CreateAliasModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.DestinationModel })
  destinations?: DestinationModel[];

  @Metadata({ data: "json, name=metatags", elemType: shared.MetaTagModel })
  metatags?: MetaTagModel[];

  @Metadata({ data: "json, name=snippets", elemType: shared.SnippetModel })
  snippets?: SnippetModel[];
}
