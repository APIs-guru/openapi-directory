import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagBaseContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames, form, name=additionalNames;" })
  additionalNames?: string;

  @Metadata({ data: "json, name=categoryName, form, name=categoryName;" })
  categoryName?: string;

  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @Metadata({ data: "json, name=urlSlug, form, name=urlSlug;" })
  urlSlug?: string;
}
