import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnnotationLayerRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descr" })
  descr?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
