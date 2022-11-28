import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationModel } from "./destinationmodel";
import { MetaTagModel } from "./metatagmodel";
import { SnippetModel } from "./snippetmodel";
export declare class CreateAliasModel extends SpeakeasyBase {
    destinations?: DestinationModel[];
    metatags?: MetaTagModel[];
    snippets?: SnippetModel[];
}
