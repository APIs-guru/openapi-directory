import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AltLabel } from "./altlabel";
import { Variable } from "./variable";
import { Value } from "./value";


export class VariableLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=altLabels", elemType: shared.AltLabel })
  altLabels?: AltLabel[];

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class VariableVariableValuesRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


export class VariableVariableValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: VariableVariableValuesRange;

  @Metadata({ data: "json, name=values", elemType: shared.Value })
  values?: Value[];
}


export class Variable extends SpeakeasyBase {
  @Metadata({ data: "json, name=ident" })
  ident?: string;

  @Metadata({ data: "json, name=label" })
  label?: VariableLabel;

  @Metadata({ data: "json, name=maxResponses" })
  maxResponses?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentType" })
  parentType?: number;

  @Metadata({ data: "json, name=questions", elemType: shared.Variable })
  questions?: Variable[];

  @Metadata({ data: "json, name=type" })
  type?: number;

  @Metadata({ data: "json, name=use" })
  use?: number;

  @Metadata({ data: "json, name=variableValues" })
  variableValues?: VariableVariableValues;
}
