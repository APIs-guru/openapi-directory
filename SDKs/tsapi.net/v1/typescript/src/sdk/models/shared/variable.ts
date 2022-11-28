import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AltLabel } from "./altlabel";
import { Value } from "./value";



export class VariableLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altLabels", elemType: AltLabel })
  altLabels?: AltLabel[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class VariableVariableValuesRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


export class VariableVariableValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: VariableVariableValuesRange;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: Value })
  values?: Value[];
}


export class Variable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ident" })
  ident?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: VariableLabel;

  @SpeakeasyMetadata({ data: "json, name=maxResponses" })
  maxResponses?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentType" })
  parentType?: number;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: Variable })
  questions?: Variable[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=use" })
  use?: number;

  @SpeakeasyMetadata({ data: "json, name=variableValues" })
  variableValues?: VariableVariableValues;
}
