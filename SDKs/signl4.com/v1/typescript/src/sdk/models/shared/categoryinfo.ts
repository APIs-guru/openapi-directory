import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryAugmentation } from "./categoryaugmentation";


export class CategoryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=augmentations", elemType: shared.CategoryAugmentation })
  augmentations?: CategoryAugmentation[];

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageName" })
  imageName?: string;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=keywordMatching" })
  keywordMatching?: number;

  @Metadata({ data: "json, name=keywords" })
  keywords?: string[];

  @Metadata({ data: "json, name=lastMatch" })
  lastMatch?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options" })
  options?: number;

  @Metadata({ data: "json, name=order" })
  order?: number;
}
