import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AnnotationLayerRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=descr" })
  descr?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
