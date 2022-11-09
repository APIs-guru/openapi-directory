import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Parameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=overridable" })
  overridable?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: any;
}
