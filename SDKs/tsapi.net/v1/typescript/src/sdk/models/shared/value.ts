import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AltLabel } from "./altlabel";



export class ValueLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altLabels", elemType: AltLabel })
  altLabels?: AltLabel[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=ident" })
  ident?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: ValueLabel;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
