import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Language extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ident" })
  ident?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=subLanguages", elemType: Language })
  subLanguages?: Language[];
}
