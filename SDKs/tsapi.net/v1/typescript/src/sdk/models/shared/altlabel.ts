import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AltLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=langIdent" })
  langIdent?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
