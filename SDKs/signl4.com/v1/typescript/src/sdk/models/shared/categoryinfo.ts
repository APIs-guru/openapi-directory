import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryAugmentation } from "./categoryaugmentation";



export class CategoryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=augmentations", elemType: CategoryAugmentation })
  augmentations?: CategoryAugmentation[];

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageName" })
  imageName?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keywordMatching" })
  keywordMatching?: number;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastMatch" })
  lastMatch?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: number;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;
}


export class CategoryInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=augmentations", elemType: CategoryAugmentation })
  augmentations?: CategoryAugmentation[];

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageName" })
  imageName?: string;

  @SpeakeasyMetadata({ data: "json, name=keywordMatching" })
  keywordMatching?: number;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastMatch" })
  lastMatch?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: number;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;
}
