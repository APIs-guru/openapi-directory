import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AltLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=langIdent" })
  langIdent?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
