import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnnotationLayerRestApiPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descr" })
  descr?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
