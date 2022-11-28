import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagBaseContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames, form, name=additionalNames;" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryName, form, name=categoryName;" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=urlSlug, form, name=urlSlug;" })
  urlSlug?: string;
}
