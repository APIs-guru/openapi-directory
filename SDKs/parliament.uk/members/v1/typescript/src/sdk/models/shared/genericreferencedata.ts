import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenericReferenceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
