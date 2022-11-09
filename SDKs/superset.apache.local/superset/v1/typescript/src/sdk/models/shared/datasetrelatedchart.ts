import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatasetRelatedChart extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @Metadata({ data: "json, name=viz_type" })
  vizType?: string;
}
