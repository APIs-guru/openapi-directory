import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Language } from "./language";


export class Language extends SpeakeasyBase {
  @Metadata({ data: "json, name=ident" })
  ident?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=subLanguages", elemType: shared.Language })
  subLanguages?: Language[];
}
