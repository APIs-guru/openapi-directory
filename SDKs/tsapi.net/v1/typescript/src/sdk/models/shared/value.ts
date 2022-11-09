import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AltLabel } from "./altlabel";


export class ValueLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=altLabels", elemType: shared.AltLabel })
  altLabels?: AltLabel[];

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=ident" })
  ident?: string;

  @Metadata({ data: "json, name=label" })
  label?: ValueLabel;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
