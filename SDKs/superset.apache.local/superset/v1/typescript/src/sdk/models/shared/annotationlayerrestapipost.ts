import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnnotationLayerRestApiPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descr" })
  descr?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
