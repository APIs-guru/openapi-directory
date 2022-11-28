import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatasetRelatedChart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @SpeakeasyMetadata({ data: "json, name=viz_type" })
  vizType?: string;
}
