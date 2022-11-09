import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AnnotationLayerRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=descr" })
  descr?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
