import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationModel } from "./destinationmodel";
import { MetaTagModel } from "./metatagmodel";
import { SnippetModel } from "./snippetmodel";


export class AliasModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: number;

  @Metadata({ data: "json, name=destinations", elemType: shared.DestinationModel })
  destinations?: DestinationModel[];

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=metatags", elemType: shared.MetaTagModel })
  metatags?: MetaTagModel[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=snippets", elemType: shared.SnippetModel })
  snippets?: SnippetModel[];

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: number;
}
